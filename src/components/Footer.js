import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="container-fluid px-5">
                        <div className="row mt-3 py-4">
                            <div className="col-xl-5 col-md-8 col-10 pl-xl-0 pr-xl-4">
                                <div className="card bg-transparent border-0">
                                    <div className="row text-white">
                                        <div className="col-4"><img src="logo-khushe.png" alt=""
                                                                    className="w-100"/></div>
                                        <div className="col-8">
                                            <h6 className="font-family-bold">Khushe Industry</h6>
                                            <p className="font-family-light">Ma`suliyati cheklangan jamiyati</p>
                                        </div>
                                    </div>
                                    <p className="font-family-regular text-white">O`zbekiston Milliy kutubxonasidan
                                        ro`yxatdan o`ting,
                                        portalga kiring,
                                        audio va video kitoblarni bepul va pullik yuklab oling. Portal xizmatlaridan
                                        foydalanishdan
                                        avval iltimos "Foydalanish qoidalari" bilan tanishib chiqing!</p>
                                </div>
                            </div>

                            <div className="col-xl-2 col-md-3 col-5 pl-xl-4 pr-xl-0">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link text-white font-family-regular ">Yangi
                                        audio
                                        kitoblar</a></li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link text-white font-family-regular ">Yangi
                                        videolar</a>
                                    </li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link text-white font-family-regular ">Janrlar</a>
                                    </li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link text-white font-family-regular ">Bepul
                                        audio
                                        kitoblar</a></li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link text-white font-family-regular">Tizim
                                        haqida</a>
                                    </li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link text-white font-family-regular">Yordam</a>
                                    </li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link text-white font-family-regular">Foydalanish
                                        qoidalari</a></li>
                                </ul>
                            </div>

                            <div className="col-xl-2 col-1 px-xl-0"></div>

                            <div className="col-xl-3 col-md-5 col-6 px-xl-0">
                                <p className="font-family-regular text-white mt-0 mb-1">Bog`lanish</p>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a href="https://Khushe.industry@inbox.ru" className="nav-link text-white">
                                            <img src="email.png" alt="" className="mr-2"></img>Khushe.industry@inbox.ru
                                        </a>
                                    </li>
                                    <li className="nav-item text-white">
                                        <a href="#" className="nav-link text-white d-flex">
                                            <div className="mr-2 pt-1">
                                                <img src="telephone.png" alt="" className=""></img>
                                            </div>
                                            <div>
                                                <p className="mb-0">(99899) 916-11-00,</p>
                                                <p className="my-0">faks: (99894) 252-11-00</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-white d-flex">
                                            <div className="mr-2 pt-3">
                                                <img src="location.png" alt="" className=""></img>
                                            </div>
                                            <div> Toshkent shahar, 100017, Yunusobod tumani, 17-mavze,
                                                Yangi Yunusobod ko`chasi, 21-uy, 48-xona
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="row ml-2 mt-3">
                                    <button className=" border-0 bg-transparent"><a href="https://facebook.com">
                                        <img src="facebook.png" alt=""></img></a></button>
                                    <button className=" border-0 mx-2 bg-transparent"><a href="https://t.me/@Sh_Akhmedovich">
                                        <img src="telegram.png" alt=""></img></a></button>
                                    <button className=" border-0 bg-transparent"><a href="https://instagram.com/sh.akhmedovich?igshid=1647fo3jqpb3u">
                                        <img src="instagram.png" alt=""></img></a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;