import { event } from "@/utils/analytics";

export const useAnalytics = () => {
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    event({
      action,
      category,
      label,
      value,
    });
  };

  return { trackEvent };
};
