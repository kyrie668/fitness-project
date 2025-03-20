"use client"

import React from "react"

interface SimplePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function SimplePagination({ currentPage, totalPages, onPageChange }: SimplePaginationProps) {
  // 生成要显示的页码数组
  const getPageNumbers = () => {
    const pageNumbers = []

    // 如果总页数小于等于5，显示所有页码
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // 总是显示第一页
      pageNumbers.push(1)

      // 当前页附近的页码
      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)

      // 如果当前页靠近开始，多显示几个后面的页码
      if (currentPage <= 3) {
        endPage = 4
      }

      // 如果当前页靠近结束，多显示几个前面的页码
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3
      }

      // 添加省略号
      if (startPage > 2) {
        pageNumbers.push("...")
      }

      // 添加中间的页码
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      // 添加省略号
      if (endPage < totalPages - 1) {
        pageNumbers.push("...")
      }

      // 总是显示最后一页
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  return (
    <div className="flex items-center justify-center space-x-1 my-4">
      {/* 上一页按钮 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md border border-gray-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="上一页"
      >
        上一页
      </button>

      {/* 页码 */}
      <div className="flex items-center space-x-1">
        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === "..." ? (
              <span className="px-2 py-1 text-gray-500">...</span>
            ) : (
              <button
                onClick={() => onPageChange(Number(page))}
                className={`px-3 py-1 rounded-md text-sm ${
                  currentPage === page ? "bg-blue-500 text-white" : "border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 下一页按钮 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md border border-gray-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="下一页"
      >
        下一页
      </button>
    </div>
  )
}

