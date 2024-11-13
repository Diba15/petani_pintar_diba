import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog4.png";
import Image from "next/image";
import {Divider} from "@nextui-org/react";

const Card = ({img, title, desc}) => {
    return (
        <div className="max-w-sm mx-auto rounded-xl mb-5 overflow-hidden items-center justify-center md:max-w-xl md:mx-10">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <Image className="h-48 w-full object-cover md:h-full md:w-60" src={img} alt={"Blog1"}/>
                </div>
                <div className="p-8">
                    <a href=""
                       className="block text-start mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</a>
                </div>
            </div>
        </div>
    )
}

const BlogCard = () => {

    const blogs = [
        {
            img: blog1,
            title: "Penggunaan Alat Pertanian Petani Pintar Membantu",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur doloremque dolores harum incidunt laborum neque repellendus, sapiente sunt unde? Adipisci assumenda doloribus est exercitationem magni molestias soluta sunt vitae."
        },
        {
          img: blog2,
          title: "Sangat Membantu dalam Pengembangan Usaha Pertanian",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur doloremque dolores harum incidunt laborum neque repellendus, sapiente sunt unde? Adipisci assumenda doloribus est exercitationem magni molestias soluta sunt vitae."
        },
        {
            img: blog3,
            title: "Hasil Pertanian Menjadi Lebih Segar",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur doloremque dolores harum incidunt laborum neque repellendus, sapiente sunt unde? Adipisci assumenda doloribus est exercitationem magni molestias soluta sunt vitae."
        },
        {
            img: blog4,
            title: "Petani Pintar Mendapatkan Penghargaan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur doloremque dolores harum incidunt laborum neque repellendus, sapiente sunt unde? Adipisci assumenda doloribus est exercitationem magni molestias soluta sunt vitae."
        }
    ]

    return (
        <div className={"flex flex-col flex-wrap mx-5 my-5 justify-center lg:flex-row"}>
            <div className={"flex flex-col"}>
                {blogs.map((blog, index) => (
                    index <= 1 && (
                        <Card key={index} {...blog}/>
                    )
                ))}
            </div>
            <Divider className={"hidden lg:block"} orientation="vertical"/>
            <div className={"flex flex-col"}>
                {blogs.map((blog, index) => (
                    index > 1 && index <= 3 && (
                        <Card key={index} {...blog}/>
                    )
                ))}
            </div>

        </div>
    )
}

export default BlogCard