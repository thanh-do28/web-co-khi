import React from 'react'
import "./Headercss.css"
import logo from '../../image/logo192.png'
function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary mx-5">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">TRANG CHỦ</a>
                            </li>
                            <li class="nav-item dropdown header-dropdown-dichvu">
                                <a class="nav-link dropdown-toggle" href="#" >
                                    DỊCH VỤ
                                </a>
                                <ul class="dropdown-menu dropdown-content-dichvu">
                                    <li><a class="dropdown-item" href="#">LÀM MÁI TÔN</a></li>
                                    <li><a class="dropdown-item" href="#">LÀM CẦU THANG SẮT-INOX</a></li>
                                    <li><a class="dropdown-item" href="#">LÀM CỬA NHÔM KÍNH</a></li>
                                    <li><a class="dropdown-item" href="#">LÀM HÀNG RÀO SẮT-INOX</a></li>
                                    <li><a class="dropdown-item" href="#">LÀM LAN CAN BAN CÔNG SẮT-INOX</a></li>
                                    <li><a class="dropdown-item" href="#">LÀM CỐNG SẮT-INOX</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown header-dropdown-sanpham">
                                <a class="nav-link dropdown-toggle" href="#" >
                                    SẢN PHẨM
                                </a>
                                <ul class="dropdown-menu dropdown-content-sanpham">
                                    <li><a class="dropdown-item" href="#">MẪU CỔNG ĐẸP</a></li>
                                    <li><a class="dropdown-item" href="#">MẪU CẦU THANG ĐẸP</a></li>
                                    <li><a class="dropdown-item" href="#">MẪU CỬA NHÔM ĐẸP</a></li>
                                    <li><a class="dropdown-item" href="#">MẪU HÀNG RÀO ĐẸP</a></li>
                                    <li><a class="dropdown-item" href="#">MẪU MÁI TÔN ĐẸP</a></li>

                                    
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='#'>TIN TỨC</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='#'>LIÊN HỆ</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header