const Footer = () => {
    return (
        <footer className="bg-harga text-white py-6 dark:bg-dark">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Petani Pintar. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:text-green-800 transition duration-300">Privacy Policy</a>
                    <a href="#" className="hover:text-green-800 transition duration-300">Terms of Service</a>
                    <a href="#" className="hover:text-green-800 transition duration-300">Contact Us</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer