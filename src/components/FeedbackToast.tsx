import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export interface FeedbackMessage {
  id: number;
  type: 'correct' | 'wrong';
  title: string;
  detail: string;
}

interface FeedbackToastProps {
  feedback: FeedbackMessage | null;
}

export const FeedbackToast: React.FC<FeedbackToastProps> = ({ feedback }) => {
  if (!feedback) return null;

  const isCorrect = feedback.type === 'correct';

  return (
    <div
      key={feedback.id}
      role="status"
      aria-live="polite"
      className={`animate-toast-in pointer-events-none absolute top-14 sm:top-16 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-md px-3.5 py-2.5 rounded-xl border shadow-lg flex items-start gap-2.5 ${
        isCorrect
          ? 'bg-emerald-950/92 border-emerald-400/40 text-white'
          : 'bg-amber-950/92 border-amber-400/50 text-white'
      }`}
    >
      {isCorrect ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
      ) : (
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
      )}
      <div className="min-w-0 text-left">
        <p className="font-display font-bold text-xs sm:text-sm leading-snug">{feedback.title}</p>
        <p className="text-[11px] sm:text-xs text-slate-200 leading-snug mt-0.5">{feedback.detail}</p>
      </div>
    </div>
  );
};
