import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ReservationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ReservationDialog = ({ open, onOpenChange }: ReservationDialogProps) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const { toast } = useToast();

  const timeSlots = [
    "06:30", "07:00", "07:30", "08:00", "08:30", "09:00",
    "12:00", "12:30", "13:00", "13:30", "14:00",
    "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !date || !time || !guests) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }

    const message = encodeURIComponent(
      `Bonjour, je souhaite réserver une table.\n` +
      `Nom: ${name.trim()}\n` +
      `Date: ${format(date, "dd/MM/yyyy")}\n` +
      `Heure: ${time}\n` +
      `Nombre de personnes: ${guests}`
    );

    window.open(`https://wa.me/212661767466?text=${message}`, "_blank");

    toast({
      title: "Redirection WhatsApp",
      description: "Votre demande de réservation a été envoyée.",
    });

    setName("");
    setDate(undefined);
    setTime("");
    setGuests("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-secondary">
            Réserver une table
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground">
            Remplissez le formulaire et nous confirmerons rapidement.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-body text-sm">Nom</Label>
            <Input
              id="name"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              className="font-body"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-body text-sm">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-body font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "dd/MM/yyyy") : "Choisir une date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label className="font-body text-sm">Heure</Label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger className="font-body">
                <SelectValue placeholder="Choisir l'heure" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot} className="font-body">
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="font-body text-sm">Nombre de personnes</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="font-body">
                <SelectValue placeholder="Combien de personnes ?" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                  <SelectItem key={n} value={String(n)} className="font-body">
                    {n} {n === 1 ? "personne" : "personnes"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body"
          >
            Confirmer la réservation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationDialog;
