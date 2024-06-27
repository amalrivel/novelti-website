```typescript
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import { Instagram } from "lucide-react";
import { Eye } from "lucide-react";
import { Calendar } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Map } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import styles from "@/app/home.module.css";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">

      ...

      <section>
        
        ...

        <div className="container mx-auto mt-8">
          <h2 className="h2">Postingan Terbaru</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="block hover:scale-[1.02] transition-all transform-gpu"
                >
                  <Card className="h-96 flex flex-col">
                    <div className="relative overflow-hidden">
                      <Image
                        src="https://scontent.fcgk40-1.fna.fbcdn.net/v/t39.30808-6/436857272_10210990699160226_6889316923652132304_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6euPH4fpoX8Q7kNvgHUqJU5&_nc_ht=scontent.fcgk40-1.fna&oh=00_AYABV7BVh1-vrZSPFe5uo2c4LNpzRqLyCfluGkMCztY14w&oe=667D265D"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        className="h-32 w-full object-cover rounded-t-lg"
                      />
                      <div className="absolute bottom-0 right-0 m-2 flex gap-2">
                        <HoverCard openDelay={0}>
                          <HoverCardTrigger asChild>
                            <Badge variant="secondary">
                              Tag
                              <ChevronDown height={15} width={15} />
                            </Badge>
                          </HoverCardTrigger>
                          <HoverCardContent>
                            The React Framework – created and maintained by
                            @vercel.
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">
                        Card Title asd asdasdadasd asd as d ad as dasd asd a d
                        asd as da sd s
                      </CardTitle>
                      <CardDescription className="inline-flex justify-start items-center ">
                        <Calendar className="mr-2 h-4 w-4" />
                        March 03, 2024
                        <Eye className="ml-4 mr-2 h-4 w-4" />
                        232 pembaca
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-hidden">
                      <p className="line-clamp-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam ullamcorper venenatis purus in sagittis. Sed
                        pellentesque, nibh a aliquam porttitor, nisl purus
                        lobortis nibh, vel ornare diam diam ac est. Aliquam erat
                        volutpat.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
          <Button className="mt-4" asChild>
            <Link href="/blog">Lihat Semua Postingan</Link>
          </Button>
        </div>
      </section>
      
      ...
      
    </main>
  );
}
```
```typescript
"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
```

mengapa HoverCardContent tertutup oleh Card yang berada disebelahnya saat dihover? apakah ada solusi untuk membuat HoverCardContent tidak tertutup saat dihover