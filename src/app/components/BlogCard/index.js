import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog4.png";
import Image from "next/image";

const Card = ({img, title, desc}) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl mb-5 shadow-md overflow-hidden items-center justify-center lg:max-w-xl lg:mx-10">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <Image className="h-48 w-full object-cover md:h-full md:w-60" src={img} alt={"Blog1"}/>
                </div>
                <div className="p-8">
                    <a href=""
                       className="block text-start mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</a>
                    <p className="mt-2 text-justify text-slate-500 line-clamp-4">{desc}</p>
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
        <div className={"flex flex-col flex-wrap my-5 justify-center lg:flex-row"}>
            {blogs.map((blog, index) => (
                <Card key={index} {...blog}/>
            ))}
        </div>
    )
}

export default BlogCard