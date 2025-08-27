import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl p-4 py-8">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Shield className="h-10 w-10 text-primary"/>
            <CardTitle className="text-3xl font-headline">Privacy Policy</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="prose max-w-none dark:prose-invert">
            <h3>1. Introduction</h3>
            <p>Your privacy is important to us. This policy explains what personal data we collect from you and how we use it.</p>
            
            <h3>2. Data We Collect</h3>
            <p>We may collect information you provide directly to us, such as when you subscribe to our newsletter (your email address). We may also collect anonymous data about your visit, such as your IP address and browser type, to help us improve our service.</p>

            <h3>3. How We Use Your Data</h3>
            <p>We use the data we collect to operate our business, provide you with our services, and personalize your experiences. We may also use the data to communicate with you, for example, sending you updates about our station.</p>

            <h3>4. Sharing Your Data</h3>
            <p>We do not sell or share your personal data with third parties, except as necessary to provide our services or as required by law.</p>

            <h3>5. Your Rights</h3>
            <p>You have the right to access and control your personal data. You can unsubscribe from our email list at any time by following the link in the email.</p>
        </CardContent>
      </Card>
    </div>
  );
}
