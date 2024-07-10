import * as React from 'react';
import { LoaderPinwheel } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-3">
      <LoaderPinwheel width={40} height={40} className="animate-spin" />
      <h1 className="h1">Loading . . .</h1>
    </div>
  );
}
