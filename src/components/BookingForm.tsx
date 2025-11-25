import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  serviceType: string;
  eventDescription: string;
  location: string;
  budget: string;
  requirements: string;
  selectedDate: string;
  agreeToTerms: boolean;
}

const BookingForm = ({ isOpen, onClose }: BookingFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "",
    eventDescription: "",
    location: "",
    budget: "",
    requirements: "",
    selectedDate: "",
    agreeToTerms: false,
  });

  const totalSteps = 5;

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const validateStep = (currentStep: number): boolean => {
    switch (currentStep) {
      case 1:
        if (!formData.fullName || !formData.email || !formData.phone) {
          toast.error("Please fill in all required fields");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          toast.error("Please enter a valid email address");
          return false;
        }
        break;
      case 2:
        if (!formData.serviceType || !formData.eventDescription) {
          toast.error("Please select a service type and describe your event");
          return false;
        }
        break;
      case 3:
        if (!formData.location || !formData.budget) {
          toast.error("Please fill in event logistics");
          return false;
        }
        break;
      case 4:
        if (!formData.selectedDate) {
          toast.error("Please select a date");
          return false;
        }
        break;
      case 5:
        if (!formData.agreeToTerms) {
          toast.error("Please agree to the terms of service");
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateStep(step)) {
      console.log("Form submitted:", formData);
      toast.success("Booking request submitted successfully! We'll be in touch soon.");
      onClose();
      setStep(1);
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        serviceType: "",
        eventDescription: "",
        location: "",
        budget: "",
        requirements: "",
        selectedDate: "",
        agreeToTerms: false,
      });
    }
  };

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-serif">Book Iris Fynn</DialogTitle>
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-2">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i + 1 <= step
                      ? "w-8 bg-gold"
                      : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Step {step} of {totalSteps}
            </span>
          </div>
        </DialogHeader>

        <div className="py-6">
          {/* Step 1: Your Details */}
          {step === 1 && (
            <div className="space-y-4 fade-in">
              <h3 className="text-xl font-semibold mb-4">Your Details</h3>
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => updateFormData("fullName", e.target.value)}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="company">Company/Organization</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => updateFormData("company", e.target.value)}
                  placeholder="Your Organization"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          )}

          {/* Step 2: Service Type */}
          {step === 2 && (
            <div className="space-y-4 fade-in">
              <h3 className="text-xl font-semibold mb-4">Service Type</h3>
              <div>
                <Label htmlFor="serviceType">Select Service *</Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => updateFormData("serviceType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="keynote">Keynote Speech</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="panelist">Panelist/MC</SelectItem>
                    <SelectItem value="media">Media Interview</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="eventDescription">Event Description *</Label>
                <Textarea
                  id="eventDescription"
                  value={formData.eventDescription}
                  onChange={(e) => updateFormData("eventDescription", e.target.value)}
                  placeholder="Please describe your event and what you need..."
                  rows={5}
                />
              </div>
            </div>
          )}

          {/* Step 3: Event Logistics */}
          {step === 3 && (
            <div className="space-y-4 fade-in">
              <h3 className="text-xl font-semibold mb-4">Event Logistics</h3>
              <div>
                <Label htmlFor="location">Location *</Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) => updateFormData("location", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select location type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="local">Local</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Budget Range *</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => updateFormData("budget", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<5k">&lt; R5,000</SelectItem>
                    <SelectItem value="5-10k">R5,000 - R10,000</SelectItem>
                    <SelectItem value="10-20k">R10,000 - R20,000</SelectItem>
                    <SelectItem value=">20k">&gt; R20,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="requirements">Specific Requirements</Label>
                <Textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => updateFormData("requirements", e.target.value)}
                  placeholder="A/V needs, travel arrangements, etc."
                  rows={4}
                />
              </div>
            </div>
          )}

          {/* Step 4: Check Availability */}
          {step === 4 && (
            <div className="space-y-4 fade-in">
              <h3 className="text-xl font-semibold mb-4">Check Availability</h3>
              <div>
                <Label htmlFor="selectedDate">Preferred Date *</Label>
                <Input
                  id="selectedDate"
                  type="date"
                  value={formData.selectedDate}
                  onChange={(e) => updateFormData("selectedDate", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Real-time calendar integration will show
                  available dates once Lovable Cloud is connected. For now, select
                  your preferred date and we'll confirm availability.
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Review & Submit */}
          {step === 5 && (
            <div className="space-y-4 fade-in">
              <h3 className="text-xl font-semibold mb-4">Review & Submit</h3>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <div>
                  <strong>Name:</strong> {formData.fullName}
                </div>
                {formData.company && (
                  <div>
                    <strong>Company:</strong> {formData.company}
                  </div>
                )}
                <div>
                  <strong>Email:</strong> {formData.email}
                </div>
                <div>
                  <strong>Phone:</strong> {formData.phone}
                </div>
                <div>
                  <strong>Service:</strong> {formData.serviceType}
                </div>
                <div>
                  <strong>Location:</strong> {formData.location}
                </div>
                <div>
                  <strong>Budget:</strong> {formData.budget}
                </div>
                <div>
                  <strong>Date:</strong> {formData.selectedDate}
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    updateFormData("agreeToTerms", checked as boolean)
                  }
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                  I agree to the Terms of Service and Privacy Policy *
                </Label>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <Button
            onClick={handleBack}
            disabled={step === 1}
            variant="outline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          {step < totalSteps ? (
            <Button onClick={handleNext} className="bg-gradient-gold text-navy">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-gradient-gold text-navy">
              Submit Request
              <CheckCircle2 className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
