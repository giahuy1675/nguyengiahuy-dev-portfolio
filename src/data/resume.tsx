import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";
import { SqlServer } from "@/components/ui/svgs/sqlserver";
import { Kafka } from "@/components/ui/svgs/kafka";
import { DotnetCore } from "@/components/ui/svgs/dotnetcore";
import { EfCore } from "@/components/ui/svgs/efcore";
import { Render } from "@/components/ui/svgs/render";
import { Neon } from "@/components/ui/svgs/neon";
import { Html5 } from "@/components/ui/svgs/html5";
import { Css } from "@/components/ui/svgs/css";
import { Gitlab } from "@/components/ui/svgs/gitlab";
import { Postman } from "@/components/ui/svgs/postman";
import { Git } from "@/components/ui/svgs/git";
import { GitHubSkill } from "@/components/ui/svgs/githubskill";
import { Gmail } from "@/components/ui/svgs/gmail";
import { Facebook } from "@/components/ui/svgs/facebook";

export const DATA = {
  name: "Huy",
  initials: "NGH",
  url: "https://github.com/giahuy1675",
  location: "Thành phố Hồ Chí Minh",
  locationLink: "https://www.google.com/maps/place/hochiminh",
  description:
    "Backend Developer (.NET Core)",
  summary:
    "Là một thực tập sinh đam mê lập trình backend, đặc biệt với công nghệ ASP.NET Core, tôi mong muốn tìm kiếm cơ hội làm việc tại môi trường chuyên nghiệp để học hỏi, rèn luyện kỹ năng và tích lũy kinh nghiệm thực tế. Mục tiêu của tôi là trở thành một Backend Developer vững chuyên môn, có khả năng xây dựng và phát triển hệ thống hiệu quả, ổn định.",
  avatarUrl: "/me.png",
  skills: [
    { name: "C#", icon: Csharp },
    { name: "ASP.NET Core", icon: DotnetCore },
    { name: "Entity Framework", icon: EfCore },
    { name: "SQL Server", icon: SqlServer },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Kafka", icon: Kafka },
    { name: "Docker", icon: Docker },
    { name: "ReactJS", icon: ReactLight },
    { name: "HTML5", icon: Html5 },
    { name: "CSS", icon: Css },
    { name: "Render", icon: Render },
    { name: "Neon", icon: Neon },
    { name: "Git", icon: Git },
    { name: "GitLab", icon: Gitlab },
    { name: "GitHub", icon: GitHubSkill },
    { name: "Postman", icon: Postman },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Trang chủ" },
  ],
  contact: {
    email: "giahuy752004@gmail.com",
    tel: "0979297119",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/giahuy1675",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,
        navbar: false,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/huynguyengia7504",
        icon: Facebook,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Gửi Email",
        url: "mailto:giahuy752004@gmail.com",
        icon: Gmail,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CÔNG TY TNHH HT SOFTWARE",
      href: "https://htsoftware.com.vn/",
      badges: [],
      location: "Thành phố Hồ Chí Minh",
      title: "Backend Developer (.NET Core)",
      logoUrl: "/ht-software-logo.png",
      start: "03/2026",
      end: "06/2026",
      description:
        "Phát triển RESTful API trên nền tảng ASP.NET Core cho hệ thống quản lý doanh nghiệp. Tham gia xây dựng các chức năng như Đối tượng kí kết và Quản lý giao việc. Tích hợp Kafka để bắn thông báo. Tùy chỉnh biểu mẫu PDF. Viết tài liệu hướng dẫn sử dụng. Làm việc với GitLab.",
    }
  ],
  education: [
    {
      school: "Trường Đại Học Công Nghệ TP.HCM",
      href: "https://www.hutech.edu.vn/",
      degree: "Chuyên ngành: Công nghệ phần mềm (Giỏi - GPA: 3.24/4.0)",
      logoUrl: "/hutech-logo.png",
      start: "2022",
      end: "2026",
    }
  ],
  projects: [
    {
      title: "Hệ thống quản lý doanh nghiệp (HT Software)",
      href: "https://dev.ids.htsoftware.vn/login",
      dates: "03/2026 - 06/2026",
      active: true,
      description:
        "Dự án thực tập tại HT SOFTWARE. Phát triển RESTful API trên nền tảng ASP.NET Core cho hệ thống quản lý doanh nghiệp. Tham gia xây dựng các chức năng như Đối tượng kí kết và Quản lý giao việc. Tích hợp Kafka để gửi thông báo nghiệp vụ. Tùy chỉnh biểu mẫu PDF và viết tài liệu hướng dẫn sử dụng.",
      technologies: [
        "C#",
        "ASP.NET Core",
        "Entity Framework Core",
        "PostgreSQL",
        "Kafka",
        "Docker"
      ],
      links: [
        {
          type: "Website",
          href: "https://dev.ids.htsoftware.vn/login",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ht-software-project.png",
      video: "",
    },
    {
      title: "Dịch vụ chăm sóc thú cưng",
      href: "https://pet-care-service-1-x7jt.onrender.com/",
      dates: "02/2025 - 09/2025",
      active: true,
      description:
        "Phát triển RESTful API với ASP.NET Core Web API, EF Core, SQL Server. Xây dựng xác thực & phân quyền người dùng (JWT, role-based). Tích hợp SignalR cho cập nhật realtime trạng thái lịch hẹn.",
      technologies: [
        "C#",
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
        "ReactJS",
        "SignalR"
      ],
      links: [
        {
          type: "Website",
          href: "https://pet-care-service-1-x7jt.onrender.com/",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/giahuy1675/pet-care-service.git",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/pet-care.png",
      video: "",
    },
    {
      title: "Phần mềm quản lý thư viện",
      href: "https://github.com/giahuy1675/QLTV_3LOPDEMO_DO_AN",
      dates: "2024", 
      active: true,
      description: "Ứng dụng quản lý thư viện phát triển bằng C# WinForms áp dụng mô hình 3 lớp (3-Tier Architecture).",
      technologies: [
        "C#",
        "WinForms",
        "SQL Server",
        "3-Tier Architecture",
        "Code First"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/giahuy1675/QLTV_3LOPDEMO_DO_AN",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: "",
    }
  ],
  hackathons: [] as any[],
} as const;
