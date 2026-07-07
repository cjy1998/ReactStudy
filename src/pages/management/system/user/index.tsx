// import { USER_LIST } from "@/_mock/assets";
import { Icon } from "@/components/icon";
import { usePathname, useRouter } from "@/routes/hooks";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { UserInfo } from "#/entity";
import { BasicStatus } from "#/enum";
import userService from "@/api/services/userService";
import { useEffect, useState } from "react";

export default function UserPage() {
	const { push } = useRouter();
	const pathname = usePathname();
	const [users, setUsers] = useState<UserInfo[]>([]);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [loading, setLoading] = useState(false);

	const fetchUsers = async () => {
		setLoading(true);
		try {
			const { items, page: page_num, page_size, total } = await userService.getUsers(page, pageSize);
			setUsers(items);
			setPage(page_num);
			setPageSize(page_size);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const handlePageChange = (page: number, pageSize: number) => {
		setPage(page);
		setPageSize(pageSize);
		fetchUsers();
	};

	useEffect(() => {
		fetchUsers();
	}, [page, pageSize]);

	const columns: ColumnsType<UserInfo> = [
		{
			title: "Name",
			dataIndex: "username",
			width: 300,
			render: (_, record) => {
				return (
					<div className="flex">
						<img alt="" src={record.avatar} className="h-10 w-10 rounded-full" />
						<div className="ml-2 flex flex-col">
							<span className="text-sm">{record.username}</span>
							<span className="text-xs text-text-secondary">{record.email}</span>
						</div>
					</div>
				);
			},
		},
		{
			title: "Role",
			dataIndex: "roles",
			align: "center",
			width: 120,
			render: (_, record) => {
				const role = record.roles?.[0];
				return role ? (
					<Badge variant="info">{role.name}</Badge>
				) : (
					<span className="text-text-secondary text-xs">—</span>
				);
			},
		},
		{
			title: "Status",
			dataIndex: "status",
			align: "center",
			width: 120,
			render: (status) => (
				<Badge variant={status === BasicStatus.DISABLE ? "error" : "success"}>
					{status === BasicStatus.DISABLE ? "Disable" : "Enable"}
				</Badge>
			),
		},
		{
			title: "Action",
			key: "operation",
			align: "center",
			width: 100,
			render: (_, record) => (
				<div className="flex w-full justify-center text-gray-500">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => {
							push(`${pathname}/${record.id}`);
						}}
					>
						<Icon icon="mdi:card-account-details" size={18} />
					</Button>
					<Button variant="ghost" size="icon" onClick={() => {}}>
						<Icon icon="solar:pen-bold-duotone" size={18} />
					</Button>
					<Button variant="ghost" size="icon">
						<Icon icon="mingcute:delete-2-fill" size={18} className="text-error!" />
					</Button>
				</div>
			),
		},
	];

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<div>User List</div>
					<Button onClick={() => {}}>New</Button>
				</div>
			</CardHeader>
			<CardContent>
				<Table
					rowKey="id"
					size="small"
					scroll={{ x: "max-content" }}
					pagination={false}
					columns={columns}
					dataSource={users}
				/>
			</CardContent>
		</Card>
	);
}
