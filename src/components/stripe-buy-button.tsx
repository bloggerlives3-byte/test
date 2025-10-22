"use client";

import Script from "next/script";

type StripeBuyButtonProps = {
  buyButtonId: string;
  publishableKey: string;
  fallbackUrl?: string;
  className?: string;
};

const StripeBuyButton = ({ buyButtonId, publishableKey, fallbackUrl, className }: StripeBuyButtonProps) => {
  return (
    <div className={className}>
      <Script
        id="stripe-buy-button"
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="lazyOnload"
      />
      <stripe-buy-button buy-button-id={buyButtonId} publishable-key={publishableKey} />
      {fallbackUrl ? (
        <p className="mt-3 text-xs text-[color:var(--color-foreground)]/60">
          Having trouble? Place your order directly via
          <a
            href={fallbackUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-1 font-semibold text-[color:var(--color-accent-berry)] underline-offset-4 hover:underline"
          >
            this Stripe link
          </a>
          .
        </p>
      ) : null}
    </div>
  );
};

export default StripeBuyButton;
