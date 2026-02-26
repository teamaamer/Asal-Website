'use client';

interface IconProps {
  className?: string;
  color?: string;
}

export function CheckIcon({ className = 'w-12 h-12', color = 'rgb(250 204 21)' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0 20 L 20 0 M 20 0 L 0 0 M 20 0 L 20 20"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(14 14)"
      />
    </svg>
  );
}

export function PlusIcon({ className = 'w-12 h-12', color = '#ffffff' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 36 24 L 40 28 L 64 28 L 64 36 L 40 36 L 36 40 L 36 64 L 28 64 L 28 40 L 24 36 L 0 36 L 0 28 L 24 28 L 28 24 L 28 0 L 36 0 Z"
        fill={color}
      />
    </svg>
  );
}

export function ArrowIcon({ className = 'w-6 h-6', color = '#ffffff' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VeloxThemesLogo({ className = 'w-32 h-8' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 126 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_279_6148)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.0083 24.8867V14.7266C50.0083 14.5939 49.9326 14.4724 49.8133 14.4116C49.6927 14.3508 49.5482 14.3619 49.4388 14.4392C48.2128 15.3095 45.4297 17.2835 45.4297 17.2835V8.39568C45.4297 7.95363 45.6457 7.53782 46.0104 7.27812C48.022 5.85115 54.5659 1.21107 54.5659 1.21107V11.3712C54.5659 11.5038 54.6417 11.6253 54.7623 11.6861C54.8815 11.7469 55.026 11.7359 55.1354 11.6585C58.091 9.56155 71.5716 0.000976562 71.5716 0.000976562V8.88881C71.5716 9.33085 71.3542 9.74666 70.9895 10.0064C67.5499 12.4459 50.0083 24.8867 50.0083 24.8867Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
