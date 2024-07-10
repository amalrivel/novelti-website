import * as React from 'react';
import { cn } from '@/lib/utils';
import { lusitana } from '@/lib/fonts';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const education = [
  {
    name: 'Sarjana',
    value: 'sarjana',
    major:
      'Pendidikan Bahasa dan Sastra Indonesia - Institut Keguruan dan Ilmu Pendidikan Padang',
  },
  {
    name: 'Magister',
    value: 'magister',
    major: 'Humaniora - Universitas Gadjah Mada',
  },
  {
    name: 'Doktor',
    value: 'doktor',
    major: 'Kependidikan - Universitas Negeri Padang',
  },
];

export default function Tentang() {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <section className="container mx-auto grid gap-8 md:grid-cols-2">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative h-64 w-64">
            <div className="absolute right-0 top-0 z-0 mr-4 h-24 w-24 rounded-full bg-foreground/10" />
            <Separator className="absolute right-0 top-0 z-10 -mr-2 mt-6 w-16 bg-foreground" />
            <Image
              src="https://pbs.twimg.com/profile_images/1593579150563979264/XmP70Qlq_400x400.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="relative z-20 mt-6 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <small className="small mb-8">Dr. Novelti, M. Hum.</small>
          <h1 className="h1 mb-4">Nama saya Novelti, Dosen Bahasa Indonesia</h1>
          <p className="mb-4">
            Land spirit abundantly Bring bearing female divided fly. Cant
            gathered stars, rule his creepeth is appear without morning land
            youll so. Evening life yielding fowl above, fourth give, there
            evening. Brought fourth of image very above. Together wont. Youll.
            Theyre itself whales all was meat.
          </p>
          <div>
            <Button asChild className="mb-8 w-full sm:w-auto">
              <Link href="/kontak">Hubungi Saya</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="mb-2 w-full text-center">
          <small className="muted">Pendidikan</small>
        </div>
        <div className="my-8 flex w-full justify-center">
          <Tabs defaultValue="sarjana" className="sm:w-3/5">
            <TabsList className="grid w-full grid-cols-3">
              {education.map((item) => (
                <TabsTrigger value={item.value} key={item.value}>
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {education.map((item) => (
              <TabsContent value={item.value} key={item.value}>
                <Card>
                  <CardHeader>
                    <Avatar className="flex h-36 w-full justify-center rounded-none">
                      <Image
                        src="https://pbs.twimg.com/profile_images/1593579150563979264/XmP70Qlq_400x400.jpg"
                        width={144}
                        height={144}
                        alt="Picture of the author"
                        className="h-36 w-36 rounded-full object-cover"
                      />
                    </Avatar>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>1999 - 2000</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">{item.major}</CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="mb-2 w-full text-center">
          <small className="muted">Pengalaman Profesional</small>
        </div>
        <Timeline position="alternate-reverse" className="mt-8">
          {[0, 1, 2, 3, 4, 5].map((item, index) => (
            <TimelineItem key={item}>
              <TimelineSeparator>
                <TimelineDot />
                {index !== [0, 1, 2, 3, 4, 5].length - 1 && (
                  <TimelineConnector />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Avatar
                  className={cn(
                    'flex h-10 w-full rounded-none',
                    index % 2 === 1 ? 'justify-start' : 'justify-end',
                  )}
                >
                  <Image
                    src="https://pbs.twimg.com/profile_images/1593579150563979264/XmP70Qlq_400x400.jpg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </Avatar>
                <small className="small">2023 - sekarang</small>
                <p>Asesor BAN PT</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </section>
    </div>
  );
}
