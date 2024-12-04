import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function checkAdminAuth() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('session')?.value

  if (!sessionToken) {
    redirect("/login?authError=Kamu harus login terlebih dahulu");
  }

  const res = await fetch('/api/auth/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ sessionToken })
  })

  if (!res.ok) {
    redirect('/login?authError=Kamu tidak memiliki akses ke halaman ini')
  }

  return await res.json()
}