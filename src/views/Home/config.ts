import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

export const dataMenu = [
    {
        key: 0,
        // icon: RentIcon,
        // iconWhite: RentIconWhite,
        title: "Thông tin - điều trị",
        path: "/thong-tin-dieu-tri/kham-benh-moi",
        dataMenuChild: [
            {
                id: 0,
                title: "Khám bệnh mới",
                path: "/thong-tin-dieu-tri/kham-benh-moi",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Tìm kiếm thông tin",
                path: "/thong-tin-dieu-tri/tim-kiem-thong-tin",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Khôi phục toa thuốc xoá",
                path: "/thong-tin-dieu-tri/tim-kiem-toa-thuoc",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 1,
        // icon: AccountIcon,
        // iconWhite: AccountIconWhite,
        title: "Cài đặt - Quản lý",
        path: "/cai-dat-quan-ly/cai-dat-phong-kham",
        dataMenuChild: [
            {
                id: 0,
                title: "Cài đặt phòng khám",
                path: "/cai-dat-quan-ly/cai-dat-phong-kham",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Quản lý Nhân viên",
                path: "/cai-dat-quan-ly/quan-ly-nhan-vien",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Quản lý chức danh",
                path: "/cai-dat-quan-ly/quan-ly-chuc-danh",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Toa thuốc tự động",
                path: "/cai-dat-quan-ly/toa-thuoc-tu-dong",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "Cài đặt định lượng thuốc",
                path: "/cai-dat-quan-ly/cai-dat-dinh-luong-thuoc",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 5,
                title: "Cài đặt truy cập quản lý",
                path: "/cai-dat-quan-ly/cai-dat-truy-cap-quan-ly",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 6,
                title: "Cài đặt dịch vụ",
                path: "/cai-dat-quan-ly/cai-dat-dich-vu",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 7,
                title: "Quản lý tài sản",
                path: "/cai-dat-quan-ly/quan-ly-tai-san",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 8,
                title: "Cài đặt mã hàng, thuốc",
                path: "/cai-dat-quan-ly/cai-dat-ma-hang-thuoc",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 10,
                title: "Cài đặt nhà cung cấp",
                path: "/cai-dat-quan-ly/cai-dat-nha-cung-cap",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 11,
                title: "Cài đặt chuẩn đoán",
                path: "/cai-dat-quan-ly/cai-dat-chuan-doan",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 12,
                title: "Cài đặt giống vật nuôi",
                path: "/cai-dat-quan-ly/cai-dat-giong-vat-nuoi",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 13,
                title: "Cài đặt lý do tái khám",
                path: "/cai-dat-quan-ly/cai-dat-ly-do-tai-kham",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 14,
                title: "Cài đặt chiết khấu",
                path: "/cai-dat-quan-ly/cai-dat-chiet-khau",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 2,
        // icon: WalletIcon,
        // iconWhite: WalletIconWhite,
        title: "Bán hàng - PetShop",
        path: "/TokenStatus",
        dataMenuChild: [
            {
                id: 0,
                title: "Bán hàng",
                path: "/quan-ly-ban-hang/ban-hang",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Danh sách bán hàng",
                path: "/quan-ly-ban-hang/danh-sach-ban-hang",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Hàng đã bán",
                path: "/quan-ly-ban-hang/hang-da-ban",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "Trả lại hàng",
                path: "/quan-ly-ban-hang/tra-lai-hang",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 5,
                title: "Danh sách trả hàng",
                path: "/quan-ly-ban-hang/danh-sach-tra-lai-hang",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 6,
                title: "Khôi phục xóa bán hàng",
                path: "/quan-ly-ban-hang/khoi-phuc-xoa-ban-hang",
                icon: SubdirectoryArrowRightIcon
            },

        ]
    },
    {
        key: 3,
        // icon: TimeBookingIcon,
        // iconWhite: TimeBookingIconWhite,
        title: "Xuất sang chi nhánh",
        path: "/MyBookings",
        dataMenuChild: [
            {
                id: 0,
                title: "Xuất hàng",
                path: "/xuat-sang-chi-nhanh/xuat-hang",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Danh sách xuất hàng",
                path: "/xuat-sang-chi-nhanh/danh-sach-xuat-hang",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 4,
        // icon: NotificationIcon,
        // iconWhite: NotificationIconWhite,
        title: "Nhập thuốc - Hàng Hoá",
        path: "/nhap-thuoc-hang-hoa/nhap-hang-hoa-moi",
        dataMenuChild: [
            {
                id: 0,
                title: "Nhập hàng hóa mới",
                path: "/nhap-thuoc-hang-hoa/nhap-hang-hoa-moi",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Danh sách nhập hàng hóa",
                path: "/nhap-thuoc-hang-hoa/danh-sach-nhap-hang-hoa",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Hàng đã nhập vào",
                path: "/nhap-thuoc-hang-hoa/hang-da-nhap-vao",
                icon: SubdirectoryArrowRightIcon
            },

        ]
    },
    {
        key: 5,
        // icon: SupportIcon,
        // iconWhite: SupportIconWhite,
        title: "Kiểm kê kho hàng",
        path: "/kiem-ke-kho-hang/kiem-ke-kho-hang",
        dataMenuChild: [
            {
                id: 0,
                title: "Kiểm kê kho hàng",
                path: "/kiem-ke-kho-hang/kiem-ke-hang",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Thông tin hàng kiểm kê",
                path: "/kiem-ke-kho-hang/thong-tin-hang-kiem-ke",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Hàng đã kiểm kê",
                path: "/kiem-ke-kho-hang/hang-da-kiem-ke",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 6,
        // icon: IcResetPassword,
        // iconWhite: IcResetPassword,
        title: "Quản Lý công nợ",
        path: "/quan-ly-cong-no",
        dataMenuChild: [
            {
                id: 0,
                title: "Quản lý công nợ",
                path: "/quan-ly-cong-no",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 7,
        // icon: IcResetPassword,
        // iconWhite: IcResetPassword,
        title: "Thống kê - doanh số",
        path: "/thong-ke-doanh-so",
        dataMenuChild: [
            {
                id: 0,
                title: "Lời lỗ",
                path: "/thong-ke-doanh-so/loi-lo",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Thu chi điều trị",
                path: "/thong-ke-doanh-so/thu-chi-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Thu chi bán hàng",
                path: "/thong-ke-doanh-so/thu-chi-ban-hang",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Xuất nhập tồn",
                path: "/thong-ke-doanh-so/xuat-nhap-ton",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "Dịch vụ hàng hóa",
                path: "/thong-ke-doanh-so/dich-vu-hang-hoa",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 5,
                title: "Điều trị theo bác sĩ",
                path: "/thong-ke-doanh-so/dieu-tri-theo-bac-si",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 6,
                title: "Bán hàng theo bác sĩ",
                path: "/thong-ke-doanh-so/ban-hang-theo-bac-si",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 7,
                title: "Chiết khấu bán hàng",
                path: "/thong-ke-doanh-so/chiet-khau-ban-hang",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 8,
                title: "Thống kê hàng tồn kho",
                path: "/thong-ke-doanh-so/thong-ke-hang-ton-kho",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 9,
                title: "Doanh số từ khách hàng",
                path: "/thong-ke-doanh-so/doanh-so-tu-khach-hang",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 10,
                title: "Điểm tích lũy",
                path: "/thong-ke-doanh-so/diem-tich-luy",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 11,
                title: "Hàng cận ngày",
                path: "/thong-ke-doanh-so/hang-can-ngay",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 12,
                title: "Thống kê khách hàng",
                path: "/thong-ke-doanh-so/thong-ke-khach-hang",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 8,
        // icon: IcResetPassword,
        // iconWhite: IcResetPassword,
        title: "Tiện ích & Thông báo",
        path: "/tien-ich-thong-bao/in-ma-vach",
        dataMenuChild: [
            {
                id: 0,
                title: "In mã vạch",
                path: "/tien-ich-thong-bao/in-ma-vach",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Gửi thông báo hệ thống",
                path: "/tien-ich-thong-bao/gui-thong-bao-he-thong",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Xem thông báo đã gửi",
                path: "/tien-ich-thong-bao/xem-thong-bao-da-gui",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 9,
        // icon: IcResetPassword,
        // iconWhite: IcResetPassword,
        title: "Kết toán - Thu chi",
        path: "",
        dataMenuChild: [
            {
                id: 0,
                title: "Tạo phiếu thu",
                path: "/ket-toan-thu-chi/tao-phieu-thu",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Tạo phiếu chi",
                path: "/ket-toan-thu-chi/tao-phieu-chi",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Danh sách phiếu thu",
                path: "/ket-toan-thu-chi/danh-sach-phieu-thu",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Danh sách phiếu chi",
                path: "/ket-toan-thu-chi/danh-sach-phieu-chi",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "thu chi -Tổng hợp",
                path: "/ket-toan-thu-chi/thu-chi-tong-hop",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 5,
                title: "Khôi phục xóa phiếu thu chi",
                path: "/ket-toan-thu-chi/khoi-phuc-xoa-phieu-thu-chi",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 10,
        // icon: IcResetPassword,
        // iconWhite: IcResetPassword,
        title: "Trợ giúp & sử dụng",
        path: "/Resetpassword",
        dataMenuChild: [
            {
                id: 0,
                title: "Thông tin - điều trị",
                path: "/tro-giup-su-dung/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Thông tin - điều trị",
                path: "/tro-giup-su-dung/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Thông tin - điều trị",
                path: "/tro-giup-su-dung/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Thông tin - điều trị",
                path: "/tro-giup-su-dung/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "Thông tin - điều trị",
                path: "/tro-giup-su-dung/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
]