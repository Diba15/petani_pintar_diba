"use client";
import {Select, SelectItem, Textarea} from "@nextui-org/react";
import {useState} from "react";

const SelectQuestion = () => {
    // Store Data from select element for category question
    const [value, setValue] = useState(new Set([]))

    // Dummy data for question category
    const categorys = [
        {
            key: 'peralatan',
            label: "Terkait Peralatan"
        },
        {
            key: 'ahli',
            label: "Terkait Orang Ahli"
        },
        {
            key: 'lain',
            label: "Lainnya..."
        },
    ]

    return (
        <div className={"flex flex-col gap-3"}>
            <Select
                fullWidth
                label="Pilih Pertanyaan"
                selectedKeys={value}
                onSelectionChange={setValue}
                defaultSelectedKeys={["umum"]}
            >
                {/* Select Item for question category*/}
                {
                    categorys.map((category) => {
                        return (
                            <SelectItem className={"dark:text-white"} key={category.key}>{category.label}</SelectItem>
                        )
                    })
                }
            </Select>
            {/* Textarea for question*/}
            <Textarea
                fullWidth
                isRequired
                label={"Pertanyaan"}
                placeholder={"Masukkan Pertanyaan"}
                rows={5}
            />
        </div>
    )
}

const BuyForm = () => {
    // Store Data from select element for category and price
    const [category, setCategory] = useState("")
    const [value, setValue] = useState("")
    // Default data for duration label
    let dummyCategory = "Minggu";

    // Dummy Data priceCategory
    const priceCategory = [
        {
            key: "Mingguan",
            label: "Minggu"
        },
        {
            key: "Bulanan",
            label: "Bulan"
        },
        {
            key: "Tahunan",
            label: "Tahun"
        }
    ]

    // Pass data from category
    const [key] = category

    // Dummy Data price
    const price = [
        {
            namePack: "Biasa",
            price: 500,
            priceType: "Rb",
            duration: key !== undefined ? key : dummyCategory
        },
        {
            namePack: "Standard",
            price: 2.5,
            priceType: "Jt",
            duration: key !== undefined ? key : dummyCategory
        },
        {
            namePack: "Eksklusif",
            price: 10,
            priceType: "Jt",
            duration: key !== undefined ? key : dummyCategory
        }
    ]

    return (
        <div className={"flex flex-row gap-3 mt-3"}>
            <Select
                className="basis-1/3"
                fullWidth
                label="Lama Berlangganan"
                selectedKeys={category}
                onSelectionChange={setCategory}
                defaultSelectedKeys={["Minggu"]}
                disallowEmptySelection={true}
            >
                {/*For loop for priceCategory*/}
                {priceCategory.map((priceCategory) => (
                    <SelectItem className="dark:text-white" key={priceCategory.label}>
                        {priceCategory.key}
                    </SelectItem>
                ))}
            </Select>
            <Select
                fullWidth
                label="Pilihan Paket"
                selectedKeys={value}
                onSelectionChange={setValue}
                defaultSelectedKeys={["Biasa"]}
                disallowEmptySelection={true}
            >
                {/*For loop for price*/}
                {price.map((prices) => (
                    <SelectItem className="dark:text-white" key={prices.namePack}>
                        {`${prices.namePack} (${prices.price}${prices.priceType}/${prices.duration})`}
                    </SelectItem>
                ))}
            </Select>
        </div>
    )
}

const FormSwitch = ({category}) => {
    return (
        // Form Switch
        <div>
            {category.has("umum") && <SelectQuestion/>}
            {category.has("layanan") && <SelectQuestion/>}
            {category.has("pembelian") && <BuyForm/>}
        </div>
    )
}

export default FormSwitch;