import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a
                href="mailto:Info@khanyisani.co.za"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
                Info@khanyisani.co.za
              </a>
              <a
                href="tel:0785236606"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                078 523 6606
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-4 text-center">
          <a
            href="https://mediaowl.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="secondary" size="sm">
              Created by Media Owl
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};