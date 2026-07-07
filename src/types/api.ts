import type { ResultStatus } from "./enum";

export interface Result<T = unknown> {
	status: ResultStatus;
	message: string;
	data: T;
}

/**
 * 后端统一分页响应结构,对应 Python 后端的 PageBase/UserPage。
 */
export interface Page<T> {
	page: number;
	page_size: number;
	total: number;
	items: T[];
}
