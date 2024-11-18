"use client"
import {Button, Input} from "@nextui-org/react";
import SelectCategory from "@/app/components/SelectCategory";
import FormSwitch from "@/app/components/FormSwitch";
import {HiMiniPaperAirplane} from "react-icons/hi2";
import {useState} from "react";

const ContactForm = () => {
    const [value, setValue] = useState(new Set([]))

    console.log(value)

    return (
        <div
            className={"flex flex-col px-5 gap-6 justify-between max-w-screen-md mx-auto pb-8 dark:text-white md:flex-row"}>
            <div className={"min-h-96 min-w-full shadow bg-white p-5 rounded-xl flex flex-col gap-3 dark:bg-dark"}>
                <Input
                    isRequired
                    type={"text"}
                    label={"Nama"}
                    placeholder={"Masukkan Nama"}
                    fullWidth
                />
                <Input
                    isRequired
                    type={"number"}
                    label={"No.Handphone"}
                    placeholder={"Masukkan No.Handphone"}
                    fullWidth
                />
                <Input
                    isRequired
                    type={"email"}
                    label={"E-mail"}
                    placeholder={"Masukkan E-mail"}
                    fullWidth
                />
                <SelectCategory value={value} setValue={setValue} />
                <FormSwitch category={value}/>
                <Button className={"bg-harga text-white"}>Submit <HiMiniPaperAirplane/></Button>
            </div>
        </div>
    )
}

export default ContactForm;