import Image from "next/image";

export function IvyCorners() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <Image
        alt=""
        className="absolute -top-9 -left-10 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/00.svg"
        width={1142}
        height={1572}
      />
      <Image
        alt=""
        className="absolute -top-9 -right-10 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/02.svg"
        width={1328}
        height={1404}
      />
      <Image
        alt=""
        className="absolute -bottom-9 -left-10 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/01.svg"
        width={1418}
        height={1778}
      />
      <Image
        alt=""
        className="absolute -right-10 -bottom-9 h-28 w-auto object-contain opacity-40 sm:h-40"
        src="/wedding-assets/ivy/03.svg"
        width={1482}
        height={1742}
      />
    </div>
  );
}

export function InvitationMessageCard({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`invitation-message-card ${className}`}>
      <IvyCorners />
      {children}
    </div>
  );
}

export function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="20"
      viewBox="0 0 24 24"
      width="20"
    >
      <path
        d="M7.25 3.75 10 6.5 8.2 8.7a14.3 14.3 0 0 0 7.1 7.1l2.2-1.8 2.75 2.75-1.65 2.35c-.5.7-1.4 1.02-2.2.76C9.9 17.8 6.2 14.1 4.14 7.6c-.26-.8.06-1.7.76-2.2l2.35-1.65Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function MessengerIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="20"
      viewBox="0 0 24 24"
      width="20"
    >
      <path d="M12 2C6.48 2 2 6.15 2 11.27c0 2.91 1.45 5.48 3.73 7.17V22l3.4-1.87c.9.25 1.87.38 2.87.38 5.52 0 10-4.15 10-9.24C22 6.15 17.52 2 12 2Zm1.01 12.43-2.55-2.72-4.97 2.72 5.46-5.8 2.61 2.72 4.91-2.72-5.46 5.8Z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="20"
      viewBox="0 0 24 24"
      width="20"
    >
      <rect
        height="15"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.7"
        width="15"
        x="4.5"
        y="4.5"
      />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.9" cy="7.2" fill="currentColor" r="1" />
    </svg>
  );
}
