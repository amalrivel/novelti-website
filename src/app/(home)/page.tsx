import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Map } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import styles from '@/app/home.module.css';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section
        className={cn(
          'relative mb-20 block bg-primary pb-32 pt-12',
          styles.hero,
        )}
      >
        <div className="container mx-auto h-full w-full md:w-1/2">
          <div className="h-full w-full text-center text-primary-foreground">
            <p>Halo semua, perkenalkan saya</p>
            <h1 className="h1 my-4">Novelti</h1>
            <p className="pb-2">
              Saya seorang Dosen di Universitas Muhammadiyah Sumatera Barat
              asdasdasd as da sad sa d asd as d as das.d.a d.as d.as d.as da.s
              da.sd a.s d.as d.as d.as d.as d.as d.asd a.sd a.d .a d asdasd as
              da sd as da sd as d ad as d asd. asd as da sda sd as d asd as d da
              sd sd as da sd as d asd as d asd as da da d as das d as d asd as d
              asd a sd asd as d as d asd as d asd as d as d asd as
            </p>
            <div className="flex items-center justify-between gap-4 pb-8">
              <Button
                variant="link"
                className="group transform-gpu text-primary-foreground transition-all hover:no-underline"
                asChild
              >
                <Link href="mailto:bundonovelti@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  <span className="transform-gpu bg-gradient-to-r from-primary-foreground to-primary-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 group-hover:bg-[length:100%_2px]">
                    bundonovelti@gmail.com
                  </span>
                </Link>
              </Button>
              <Button
                variant="link"
                className="group transform-gpu text-primary-foreground transition-all hover:no-underline"
                asChild
              >
                <Link
                  href="https://www.instagram.com/noveltimuis/"
                  target="_blank"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  <span className="transform-gpu bg-gradient-to-r from-primary-foreground to-primary-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 group-hover:bg-[length:100%_2px]">
                    noveltimuis
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute z-10 w-full text-center">
          <Image
            src="https://pbs.twimg.com/profile_images/1593579150563979264/XmP70Qlq_400x400.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
            className="inline h-[200px] w-[200px] rounded-full border-4 border-foreground object-cover shadow-sm"
          />
        </div>
      </section>

      <section className="container mx-auto h-full w-full md:w-3/4">
        <div className="flex h-full w-full flex-col items-center text-center">
          <small className="muted">Tentang Saya</small>
          <h2 className="h2 mt-3 md:w-3/5">
            Halo, Saya <span className="text-primary">Novelti</span>. Seorang
            Dosen Bahasa Indonesia.
          </h2>
        </div>
        <div className="flex flex-row flex-wrap text-justify md:mt-4 md:justify-center">
          <p className="basis-full p-2 md:basis-1/2">
            Im currently the VP of Developer Experience at Vercel, where I lead
            our Developer Relations and Documentation teams. I focus on
            educating and growing the Vercel and Next.js communities.
          </p>
          <p className="basis-full p-2 md:basis-1/2">
            I love building for the web. From something as simple as a single
            HTML file all the way to large Next.js applications. The web is
            incredible.
          </p>
          <Button className="mt-4 basis-full md:mt-4 md:basis-0" asChild>
            <Link href="/tentang">Pelajari lebih lanjut</Link>
          </Button>
        </div>
      </section>

      <section>
        <div className="w-full text-center">
          <small className="muted">Blog</small>
        </div>
        <div className="container mx-auto mt-8 flex flex-col-reverse items-center gap-4 md:flex-row">
          <div className="mt-4 h-full w-full md:mt-0">
            <h2 className="h2 mb-8">Bla Bla Bla Bla</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ullamcorper venenatis purus in sagittis. Sed pellentesque, nibh a
              aliquam porttitor, nisl purus lobortis nibh, vel ornare diam diam
              ac est. Aliquam erat volutpat. Sed vehicula mi ut nisl interdum,
              tempus aliquet est faucibus. Donec sollicitudin scelerisque diam,
              a cursus nisi elementum vel. Donec venenatis pharetra posuere.
              Mauris lobortis ex et libero finibus, id egestas libero blandit.
              Nullam id scelerisque orci.
            </p>
          </div>
          <div className="relative mt-5 h-full w-full md:mt-10">
            <Link
              href="/blog"
              className="absolute left-0 right-0 mx-auto h-full w-full max-w-80 -translate-y-5 translate-x-5 rotate-6 transform-gpu transition-all hover:scale-[1.02]"
            >
              <Card className="flex h-full flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://pbs.twimg.com/profile_images/1593579150563979264/XmP70Qlq_400x400.jpg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className="h-40 w-full rounded-t-lg object-cover"
                  />
                  <div className="absolute bottom-0 right-0 m-2 flex flex-wrap justify-end gap-2">
                    <Badge variant="secondary">Tag</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>
                    Card Title asd asdasdadasd asd as d ad as dasd asd a d asd
                    as da sd s
                  </CardTitle>
                  <CardDescription className="inline-flex items-center justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    March 03, 2024
                    <Eye className="ml-4 mr-2 h-4 w-4" />
                    232 pembaca
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 overflow-hidden">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ullamcorper venenatis purus in sagittis. Sed
                    pellentesque, nibh a aliquam porttitor, nisl purus lobortis
                    nibh, vel ornare diam diam ac est. Aliquam erat volutpat.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link
              href="/blog"
              className="mx-auto block h-full w-full max-w-80 transform-gpu transition-all hover:scale-[1.02]"
            >
              <Card className="flex h-full flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://pbs.twimg.com/profile_images/1593579150563979264/XmP70Qlq_400x400.jpg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className="h-40 w-full rounded-t-lg object-cover"
                  />
                  <div className="absolute bottom-0 right-0 m-2 flex flex-wrap justify-end gap-2">
                    <Badge variant="secondary">Tag</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>
                    Card Title asd asdasdadasd asd as d ad as dasd asd a d asd
                    as da sd s
                  </CardTitle>
                  <CardDescription className="inline-flex items-center justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    March 03, 2024
                    <Eye className="ml-4 mr-2 h-4 w-4" />
                    232 pembaca
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 overflow-hidden">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ullamcorper venenatis purus in sagittis. Sed
                    pellentesque, nibh a aliquam porttitor, nisl purus lobortis
                    nibh, vel ornare diam diam ac est. Aliquam erat volutpat.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="h2">Postingan Terbaru</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4].map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="block h-full transform-gpu transition-all hover:scale-[1.02]"
                >
                  <Card className="flex h-full flex-col">
                    <div className="relative overflow-hidden">
                      <Image
                        src="https://pbs.twimg.com/profile_images/1593579150563979264/XmP70Qlq_400x400.jpg"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        className="h-40 w-full rounded-t-lg object-cover"
                      />
                      <div className="absolute bottom-0 right-0 m-2 flex flex-wrap justify-end gap-2">
                        <Badge variant="secondary">Tag</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>
                        Card Title asd asdasdadasd asd as d ad as dasd asd a d
                        asd as da sd s
                      </CardTitle>
                      <CardDescription className="inline-flex items-center justify-start">
                        <Calendar className="mr-2 h-4 w-4" />
                        March 03, 2024
                        <Eye className="ml-4 mr-2 h-4 w-4" />
                        232 pembaca
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-hidden">
                      <p>
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
            <li>
              <Link
                href="/"
                className="block h-full transform-gpu transition-all hover:scale-[1.02]"
              >
                <Card className="flex h-full flex-col">
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://pbs.twimg.com/profile_images/1593579150563979264/XmP70Qlq_400x400.jpg"
                      width={200}
                      height={200}
                      alt="Picture of the author"
                      className="h-40 w-full rounded-t-lg object-cover"
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
                    <CardTitle>
                      Card Title asd asdasdadasd asd as d ad as dasd asd a d asd
                      as da sd s
                    </CardTitle>
                    <CardDescription className="inline-flex items-center justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      March 03, 2024
                      <Eye className="ml-4 mr-2 h-4 w-4" />
                      232 pembaca
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-hidden">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </li>
          </ul>
          <Button className="mt-4" asChild>
            <Link href="/blog">Lihat Semua Postingan</Link>
          </Button>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="w-full text-center">
          <small className="muted">Kontak</small>
        </div>
        <div className="mt-6 inline-flex w-full flex-wrap justify-around gap-6">
          <Link
            href="https://www.google.com/maps/place/Sumatera+Barat/"
            target="_blank"
          >
            <div className="group inline-flex transform-gpu items-center transition-all">
              <div className="flex h-full">
                <Map
                  height="60"
                  width="60"
                  className="group transform-gpu pr-2 transition-all duration-500 group-hover:text-primary"
                />
              </div>
              <div className="inline-flex flex-col">
                <p className="large group -mb-1 transform-gpu transition-all duration-500 group-hover:text-primary">
                  Lokasi
                </p>
                <Separator className="group transform-gpu transition-all duration-500 group-hover:bg-primary" />
                <p className="small group mt-1 transform-gpu transition-all duration-500 group-hover:text-primary">
                  Sumatera Barat, Indonesia
                </p>
              </div>
            </div>
          </Link>
          <Link href="https://www.facebook.com/novelti.muis/" target="_blank">
            <div className="group inline-flex transform-gpu items-center transition-all">
              <div className="flex h-full">
                <Facebook
                  height="60"
                  width="60"
                  className="group transform-gpu pr-2 transition-all duration-500 group-hover:text-primary"
                />
              </div>
              <div className="inline-flex flex-col">
                <p className="large group -mb-1 transform-gpu transition-all duration-500 group-hover:text-primary">
                  Facebook
                </p>
                <Separator className="group transform-gpu transition-all duration-500 group-hover:bg-primary" />
                <p className="small group mt-1 transform-gpu transition-all duration-500 group-hover:text-primary">
                  Novelti Muis
                </p>
              </div>
            </div>
          </Link>
          <Link href="https://www.instagram.com/noveltimuis/" target="_blank">
            <div className="group inline-flex transform-gpu items-center transition-all">
              <div className="flex h-full">
                <Instagram
                  height="60"
                  width="60"
                  className="group transform-gpu pr-2 transition-all duration-500 group-hover:text-primary"
                />
              </div>
              <div className="inline-flex flex-col">
                <p className="large group -mb-1 transform-gpu transition-all duration-500 group-hover:text-primary">
                  Instagram
                </p>
                <Separator className="group transform-gpu transition-all duration-500 group-hover:bg-primary" />
                <p className="small group mt-1 transform-gpu transition-all duration-500 group-hover:text-primary">
                  noveltimuis
                </p>
              </div>
            </div>
          </Link>
          <Link href="mailto:bundonovelti@gmail.com">
            <div className="group inline-flex transform-gpu items-center transition-all">
              <div className="flex h-full">
                <Mail
                  height="60"
                  width="60"
                  className="group transform-gpu pr-2 transition-all duration-500 group-hover:text-primary"
                />
              </div>
              <div className="inline-flex flex-col">
                <p className="large group -mb-1 transform-gpu transition-all duration-500 group-hover:text-primary">
                  Mail
                </p>
                <Separator className="group transform-gpu transition-all duration-500 group-hover:bg-primary" />
                <p className="small group mt-1 transform-gpu transition-all duration-500 group-hover:text-primary">
                  bundonovelti@gmail.com
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/bundo-novelti/"
            target="_blank"
          >
            <div className="group inline-flex transform-gpu items-center transition-all">
              <div className="flex h-full">
                <Linkedin
                  height="60"
                  width="60"
                  className="group transform-gpu pr-2 transition-all duration-500 group-hover:text-primary"
                />
              </div>
              <div className="inline-flex flex-col">
                <p className="large group -mb-1 transform-gpu transition-all duration-500 group-hover:text-primary">
                  LinkedIn
                </p>
                <Separator className="group transform-gpu transition-all duration-500 group-hover:bg-primary" />
                <p className="small group mt-1 transform-gpu transition-all duration-500 group-hover:text-primary">
                  Novelti Novelti
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/kontak">Hubungi Saya</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
