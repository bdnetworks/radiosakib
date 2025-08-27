'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleSuggestTags } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wand2, LoaderCircle, Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  tags: [],
  error: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="mt-4">
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Suggest Tags
        </>
      )}
    </Button>
  );
}

export default function TagSuggestionClient() {
  const [state, formAction] = useFormState(handleSuggestTags, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state.error, toast]);


  return (
    <form action={formAction}>
      <Textarea
        name="text"
        placeholder="Paste your blog post content here (minimum 50 characters)..."
        rows={15}
        required
      />
      <SubmitButton />

      {state.tags && state.tags.length > 0 && (
        <div className="mt-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Suggested Tags!</AlertTitle>
            <AlertDescription className="flex flex-wrap gap-2 pt-2">
              {state.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-base">
                  {tag}
                </Badge>
              ))}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </form>
  );
}
