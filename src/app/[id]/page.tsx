"use client"

import { BottomNavigation } from "@/components/navigation/bottom-navigation";
import { TopNavigation } from "@/components/navigation/top-navigation";
import { ViewMessage } from "@/components/pages/landing-page/view-message";
import { useParams } from "next/navigation";

export default function ViewMessagePage(){

    const { id } = useParams()

    return (
        <>
        <TopNavigation />
        <ViewMessage link={String(id)}/>
        <BottomNavigation />
        </>
    )
}