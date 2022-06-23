function Footer() {
    return (
        <footer className="grid grid-cols-1 px-32 text-gray-600 bg-gray-100 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 py-14">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold uppercase">About</h5>
                <p className="cursor-pointer">How Airbnb work</p>
                <p className="cursor-pointer">News room</p>
                <p className="cursor-pointer">Investors</p>
                <p className="cursor-pointer">Airbnb Plus</p>
                <p className="cursor-pointer">Airbnb Deluxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold uppercase">Community</h5>
                <p className="cursor-pointer">Accessibility</p>
                <p className="cursor-pointer">This is not a real site</p>
                <p className="cursor-pointer">It's a pretty awesome clone</p>
                <p className="cursor-pointer">Referrals accepted</p>
                <p className="cursor-pointer">Super Airbnb Followers</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold uppercase">Host</h5>
                <p className="cursor-pointer">NextJS App</p>
                <p className="cursor-pointer">Present</p>
                <p className="cursor-pointer">Zero to Full Stack hero</p>
                <p className="cursor-pointer">Hundreds of Studients</p>
                <p className="cursor-pointer">Join now</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold uppercase">Support</h5>
                <p className="cursor-pointer">Help center</p>
                <p className="cursor-pointer">Trust & safety</p>
                <p className="cursor-pointer">Say hy Youtube</p>
                <p className="cursor-pointer">Easter Eggs</p>
                <p className="cursor-pointer">For the win</p>
            </div>
        </footer>
    )
}

export default Footer;