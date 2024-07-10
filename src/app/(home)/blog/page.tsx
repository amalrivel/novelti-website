'use client';

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
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useForm } from 'react-hook-form';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const formSchema = z.object({
  title: z.string({
    message: 'Judul harus dalam bentuk string',
  }),
  // tag: z.string(),
  tag: z.string().optional().array(),
});

const tags = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
];
const post = Array.from({ length: 10 }, (_, i) => {
  return {
    title: `Judul ke berapa ya, judul ke ${i}`,
    tag: [tags[i % 9].label, tags[(i + 5) % 9].label],
  };
});
let filteredPosts: object[] = post;

export default function Blog() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // function handleSearch(term: string) {
  //   const params = new URLSearchParams(searchParams);
  //   if (term) {
  //     params.set('query', term);
  //   } else {
  //     params.delete('query');
  //   }
  //   replace(`${pathname}?${params.toString()}`);
  // }

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: searchParams?.get('judul')?.toString() ?? '',
      tag: searchParams?.get('tag')?.toString()?.split(',') ?? [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const params = new URLSearchParams(searchParams);

    if (values.title) {
      params.set('judul', values.title);
    } else {
      params.delete('judul');
    }

    if (values.tag.length > 0) {
      params.set('tag', values.tag.join(','));
    } else {
      params.delete('tag');
    }
    replace(`${pathname}?${params.toString()}`);

    filteredPosts = post.filter((item) =>
      item.title
        .toLowerCase()
        .includes(searchParams?.get('judul')?.toString().toLowerCase() ?? ''),
    );

    console.log(values);
  }
  // console.log(searchParams?.get('judul')?.toString());

  return (
    <div className="flex flex-col gap-8 mt-8">
      <section className="container mx-auto">
        <h1 className="h2">Blog</h1>
      </section>
      <section className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="order-last md:order-none lg:col-span-2 ">
            <ul className="grid lg:grid-cols-2 gap-4">
              {filteredPosts?.length > 0 ? (
                filteredPosts.map((item, index) => (
                  <li key={index}>
                    <Link
                      href="/"
                      className="block hover:scale-[1.02] transition-all transform-gpu h-full"
                    >
                      <Card className="flex flex-col h-full">
                        <div className="relative overflow-hidden">
                          <Image
                            src="https://pbs.twimg.com/profile_images/1593579150563979264/XmP70Qlq_400x400.jpg"
                            width={200}
                            height={200}
                            alt="Picture of the author"
                            className="h-40 w-full object-cover rounded-t-lg"
                          />
                          <div className="absolute bottom-0 right-0 m-2 flex flex-wrap justify-end gap-2">
                            {item.tag.map((item) => (
                              <Badge variant="secondary">{item}</Badge>
                            ))}
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription className="inline-flex justify-start items-center ">
                            <Calendar className="mr-2 h-4 w-4" />
                            March 03, 2024
                            <Eye className="ml-4 mr-2 h-4 w-4" />
                            232 pembaca
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-hidden">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam ullamcorper venenatis purus in
                            sagittis. Sed pellentesque, nibh a aliquam
                            porttitor, nisl purus lobortis nibh, vel ornare diam
                            diam ac est. Aliquam erat volutpat.
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </li>
                ))
              ) : (
                <div>Postingan tidak ditemukan</div>
              )}
            </ul>
            <div className="flex mt-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>

          <div className="flex flex-col h-full order-first md:order-none mb-4">
            <div className="md:sticky md:top-16">
              <h4 className="h4">Pencarian</h4>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Judul</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Judul postingan"
                            {...field}
                            // value={undefined}
                            // defaultValue={searchParams.get('judul')?.toString()}
                          />
                        </FormControl>
                        <FormDescription>
                          Masukkan judul postingan yang ingin anda cari.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tag"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Tag</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  'w-full justify-between',
                                  !(field.value && field.value?.length > 0) &&
                                    'text-muted-foreground',
                                )}
                              >
                                <div className="h-full w-full text-start flex gap-2 overflow-hidden">
                                  {field.value && field.value?.length > 0
                                    ? field.value?.map((value, index) => {
                                        const matchingTag = tags.find(
                                          (tag) => tag.value === value,
                                        );
                                        return matchingTag ? (
                                          <Badge
                                            variant="secondary"
                                            key={index}
                                          >
                                            {matchingTag.label}
                                          </Badge>
                                        ) : undefined;
                                      })
                                    : 'Select language'}
                                </div>
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <Command>
                              <CommandInput placeholder="Search language..." />
                              <CommandEmpty>No language found.</CommandEmpty>
                              <ScrollArea className="h-72">
                                <CommandGroup>
                                  {tags.map((language) => (
                                    <CommandItem
                                      value={language.value}
                                      key={language.value}
                                      onSelect={() => {
                                        if (!field.value) {
                                          form.setValue('tag', [
                                            language.value,
                                          ]);
                                        } else if (
                                          field.value?.filter(
                                            (item) => item === language.value,
                                          ).length === 0
                                        ) {
                                          form.setValue('tag', [
                                            ...field.value,
                                            language.value,
                                          ]);
                                        } else {
                                          form.setValue(
                                            'tag',
                                            field.value.filter(
                                              (item) => item !== language.value,
                                            ),
                                          );
                                        }
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          'mr-2 h-4 w-4',
                                          field.value
                                            ?.map((value) => {
                                              const matchingTag = tags.find(
                                                (tag) => tag.value === value,
                                              );
                                              return matchingTag
                                                ? matchingTag.label
                                                : undefined;
                                            })
                                            .filter(
                                              (item) => item === language.label,
                                            ).length > 0
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                        )}
                                      />
                                      {language.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </ScrollArea>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Masukkan tag postingan yang ingin anda cari.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Cari</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
