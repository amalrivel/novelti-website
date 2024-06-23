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
import { Mail } from "lucide-react";
import { Instagram } from "lucide-react";
import styles from "@/app/home.module.css";

export default function Home() {
  return (
    <main>
      <section
        className={cn("block relative bg-primary pb-32 pt-12", styles.hero)}
      >
        <div className="container px-4 mx-auto md:w-1/2 w-full h-full">
          <div className="text-primary-foreground text-center w-full h-full">
            <span>Halo semua, perkenalkan saya</span>
            <h1 className="h1 my-4">Novelti</h1>
            <p className="pb-2">
              Saya seorang Dosen di Universitas Muhammadiyah Sumatera Barat
              asdasdasd as da sad sa d asd as d as das.d.a d.as d.as d.as da.s
              da.sd a.s d.as d.as d.as d.as d.as d.asd a.sd a.d .a d asdasd as
              da sd as da sd as d ad as d asd. asd as da sda sd as d asd as d da
              sd sd as da sd as d asd as d asd as da da d as das d as d asd as d
              asd a sd asd as d as d asd as d asd as d as d asd as
            </p>
            <div className="flex justify-center items-center gap-4 pb-8">
              <Button
                variant="link"
                className="text-primary-foreground"
                asChild
              >
                <Link href="mailto:bundonovelti@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  bundonovelti@gmail.com
                </Link>
              </Button>
              <Button
                variant="link"
                className="text-primary-foreground"
                asChild
              >
                <Link
                  href="https://www.instagram.com/noveltimuis/"
                  target="_blank"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  noveltimuis
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute w-full text-center z-10">
          <Image
            src="https://scontent.fcgk40-1.fna.fbcdn.net/v/t39.30808-6/436857272_10210990699160226_6889316923652132304_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6euPH4fpoX8Q7kNvgHUqJU5&_nc_ht=scontent.fcgk40-1.fna&oh=00_AYABV7BVh1-vrZSPFe5uo2c4LNpzRqLyCfluGkMCztY14w&oe=667D265D"
            width={200}
            height={200}
            alt="Picture of the author"
            className="inline rounded-full border-4 border-foreground shadow-sm h-[200px] w-[200px] object-cover"
          />
        </div>
      </section>

      <section className="container px-4 mx-auto md:w-3/4 w-full h-full mt-32">
        <div className="flex flex-col items-center text-center w-full h-full">
          <small className="muted">Tentang Saya</small>
          <h2 className="h2 mt-3 md:w-3/5">
            Halo, Saya <span className="text-primary">Novelti</span>. Seorang
            Dosen Bahasa Indonesia.
          </h2>
        </div>
        <div className="flex flex-row flex-wrap md:justify-center md:mt-4 text-justify">
          <p className="basis-full md:basis-1/2 p-2">
            Im currently the VP of Developer Experience at Vercel, where I lead
            our Developer Relations and Documentation teams. I focus on
            educating and growing the Vercel and Next.js communities.
          </p>
          <p className="basis-full md:basis-1/2 p-2">
            I love building for the web. From something as simple as a single
            HTML file all the way to large Next.js applications. The web is
            incredible.
          </p>
          <Button className="basis-full md:basis-0 mt-4 md:mt-8">
            Pelajari lebih lanjut
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 flex flex-col-reverse items-center md:flex-row gap-4 mt-16 lg:mt-28">
        <div className="h-full w-full">
          <h2 className="h2">Bla Bla Bla Bla</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ullamcorper venenatis purus in sagittis. Sed pellentesque, nibh a
            aliquam porttitor, nisl purus lobortis nibh, vel ornare diam diam ac
            est. Aliquam erat volutpat. Sed vehicula mi ut nisl interdum, tempus
            aliquet est faucibus. Donec sollicitudin scelerisque diam, a cursus
            nisi elementum vel. Donec venenatis pharetra posuere. Mauris
            lobortis ex et libero finibus, id egestas libero blandit. Nullam id
            scelerisque orci.
          </p>
        </div>
        <Link href="/blog" className="relative h-full w-full">
          <div className="w-full scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow absolute max-w-[350px] transform-gpu top-1/2 translate-y-[-55%] md:translate-y-[-50%] lg:translate-y-[-60%] left-1/2 -translate-x-1/2 md:translate-x-[-50%] lg:translate-x-[-30%] rotate-3 md:rotate-6 lg:rotate-12 pointer-events-none md:pointer-events-auto">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full Zscale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow mx-auto max-w-[350px]">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </Link>
      </section>
    </main>
  );
}
