// lib/analytics.ts
import ReactGA from "react-ga4";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const initGA = () => {
  if (!GA_TRACKING_ID) {
    console.warn("Google Analytics ID is missing. GA tracking is disabled.");
    return;
  }

  ReactGA.initialize(GA_TRACKING_ID);
};

export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return;

  ReactGA.send({
    hitType: "pageview",
    page: url,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_TRACKING_ID) return;

  ReactGA.event({
    action,
    category,
    label,
    value,
  });
};
