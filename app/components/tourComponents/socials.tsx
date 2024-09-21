import { TelegramIcon, WhatsAppIcon } from "@/app/ui/icons/icons";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export function Socials() {
    return(
        <div className="bottom-4 md:bottom-10 sticky z-20 max-w-max ml-auto mr-4 md:mr-10 mb-2">
            <div className="flex flex-col gap-5">
                <Link
                    href="https://wa.me/message/MUTHKTUODGNHP1"
                    target="_blank"
                >
                    <PulsatingButton pulseColor="#29A71A" className="p-0 bg-white">
                        <WhatsAppIcon />
                    </PulsatingButton>
                </Link>
                <Link
                    href="https://t.me/xtravelkg"
                    target="_blank"
                >
                    <PulsatingButton pulseColor="#40B3E0" className="p-0 bg-white">
                        <TelegramIcon />
                    </PulsatingButton>
                </Link>
            </div>
        </div>
    )
}