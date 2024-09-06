import { Button } from "@/components/ui/button";
import { redirect } from 'next/navigation';

export default function Home() {
    redirect('/dashboard'); // Automatically redirect to the dashboard

    return null; // Nothing to render since we're redirecting
}
