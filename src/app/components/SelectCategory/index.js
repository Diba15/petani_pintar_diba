"use client"
import {Select, SelectItem} from "@nextui-org/react";

const SelectCategory = ({value, setValue}) => {
    const categorys = [
        {
            key: 'umum',
            label: "Pertanyaan Umum"
        },
        {
            key: 'layanan',
            label: "Pertanyaan Layanan"
        },
        {
            key: 'pembelian',
            label: "Pembelian"
        },
    ]
    return (
        <Select
            fullWidth
            label="Pilih Kategori"
            selectedKeys={value}
            onSelectionChange={setValue}
            defaultSelectedKeys={["umum"]}
        >
            {
                categorys.map((category) => {
                    return (
                        <SelectItem className={"dark:text-white"} key={category.key}>{category.label}</SelectItem>
                    )
                })
            }
        </Select>
    )
}

export default SelectCategory