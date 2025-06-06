import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

export const dataMenu = [
    {
        key: 0,
        // icon: RentIcon,
        // iconWhite: RentIconWhite,
        title: "Thông tin - điều trị",
        path: "/thong-tin-dieu-tri",
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
        path: "/MemberProfile",
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
                title: "Thông tin - điều trị",
                path: "/xuat-sang-chi-nhanh/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Thông tin - điều trị",
                path: "/xuat-sang-chi-nhanh/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Thông tin - điều trị",
                path: "/xuat-sang-chi-nhanh/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Thông tin - điều trị",
                path: "/xuat-sang-chi-nhanh/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "Thông tin - điều trị",
                path: "/xuat-sang-chi-nhanh/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 4,
        // icon: NotificationIcon,
        // iconWhite: NotificationIconWhite,
        title: "Nhập thuốc - Hàng Hoá",
        path: "/AccountActivities",
        dataMenuChild: [
            {
                id: 0,
                title: "Thông tin - điều trị",
                path: "/nhap-thuoc-hang-hoa/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Thông tin - điều trị",
                path: "/nhap-thuoc-hang-hoa/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Thông tin - điều trị",
                path: "/nhap-thuoc-hang-hoa/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Thông tin - điều trị",
                path: "/nhap-thuoc-hang-hoa/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "Thông tin - điều trị",
                path: "/nhap-thuoc-hang-hoa/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 5,
        // icon: SupportIcon,
        // iconWhite: SupportIconWhite,
        title: "Kiểm kê kho hàng",
        path: "/SupportCenter",
        dataMenuChild: [
            {
                id: 0,
                title: "Thông tin - điều trị",
                path: "/kiem-ke-kho-hang/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Thông tin - điều trị",
                path: "/kiem-ke-kho-hang/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Thông tin - điều trị",
                path: "/kiem-ke-kho-hang/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Thông tin - điều trị",
                path: "/kiem-ke-kho-hang/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "Thông tin - điều trị",
                path: "/kiem-ke-kho-hang/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 6,
        // icon: IcResetPassword,
        // iconWhite: IcResetPassword,
        title: "Quản Lý công nợ",
        path: "/Resetpassword",
        dataMenuChild: [
            {
                id: 0,
                title: "Thông tin - điều trị",
                path: "/quan-ly-cong-no/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Thông tin - điều trị",
                path: "/quan-ly-cong-no/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Thông tin - điều trị",
                path: "/quan-ly-cong-no/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Thông tin - điều trị",
                path: "/quan-ly-cong-no/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "Thông tin - điều trị",
                path: "/quan-ly-cong-no/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 7,
        // icon: IcResetPassword,
        // iconWhite: IcResetPassword,
        title: "Thống kê - doanh số",
        path: "/Resetpassword",
        dataMenuChild: [
            {
                id: 0,
                title: "Thông tin - điều trị",
                path: "/thong-ke-doanh-so/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Thông tin - điều trị",
                path: "/thong-ke-doanh-so/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Thông tin - điều trị",
                path: "/thong-ke-doanh-so/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Thông tin - điều trị",
                path: "/thong-ke-doanh-so/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "Thông tin - điều trị",
                path: "/thong-ke-doanh-so/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 8,
        // icon: IcResetPassword,
        // iconWhite: IcResetPassword,
        title: "Tiện ích & Thông báo",
        path: "/Resetpassword",
        dataMenuChild: [
            {
                id: 0,
                title: "Thông tin - điều trị",
                path: "/tien-ich-thong-bao/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Thông tin - điều trị",
                path: "/tien-ich-thong-bao/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Thông tin - điều trị",
                path: "/tien-ich-thong-bao/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Thông tin - điều trị",
                path: "/tien-ich-thong-bao/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "Thông tin - điều trị",
                path: "/tien-ich-thong-bao/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
        ]
    },
    {
        key: 9,
        // icon: IcResetPassword,
        // iconWhite: IcResetPassword,
        title: "Kết toán - Thu chi",
        path: "/Resetpassword",
        dataMenuChild: [
            {
                id: 0,
                title: "Thông tin - điều trị",
                path: "/ket-toan-thu-chi/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 1,
                title: "Thông tin - điều trị",
                path: "/ket-toan-thu-chi/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 2,
                title: "Thông tin - điều trị",
                path: "/ket-toan-thu-chi/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 3,
                title: "Thông tin - điều trị",
                path: "/ket-toan-thu-chi/thong-tin-dieu-tri",
                icon: SubdirectoryArrowRightIcon
            },
            {
                id: 4,
                title: "Thông tin - điều trị",
                path: "/ket-toan-thu-chi/thong-tin-dieu-tri",
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