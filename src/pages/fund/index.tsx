import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Label } from '@radix-ui/react-label';
import SimplePagination from '@/components/pagination';
import { useEffect, useState } from 'react';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

const Data = [
  {
    id: '1',
    name: '健身房增肌计划',
    price: 89.9,
    status: '支出',
    time: '2025-02-20 10:00:00',
  },
  {
    id: '2',
    name: '有氧跑步计划',
    price: 60,
    status: '支出',
    time: '2025-02-20 18:00:00',
  },
  {
    id: '3',
    name: 'Tabata 间歇训练',
    price: 100,
    status: '支出',
    time: '2025-02-20 18:00:00',
  },
  {
    id: '4',
    name: '初级瑜伽',
    price: 50,
    status: '支出',
    time: '2025-02-20 18:00:00',
  },
  {
    id: '5',
    name: '力量瑜伽',
    price: 100,
    status: '支出',
    time: '2025-02-20 18:00:00',
  },
  {
    id: '6',
    name: '睡前放松瑜伽',
    price: 60,
    status: '收入',
    time: '2025-02-20 18:00:00',
  },
  {
    id: '7',
    name: '脊柱健康瑜伽',
    price: 80,
    status: '支出',
    time: '2025-02-20 18:00:00',
  },
  {
    id: '8',
    name: '全身功能性训练',
    price: 150,
    status: '收入',
    time: '2025-02-20 18:00:00',
  },
  {
    id: '9',
    name: '柔术训练',
    price: 100,
    status: '收入',
    time: '2025-02-20 18:00:00',
  },
  {
    id: '10',
    name: '膝关节康复训练',
    price: 100,
    status: '支出',
    time: '2025-02-20 18:00:00',
  },
  {
    id: '11',
    name: '肩颈康复训练',
    price: 100,
    status: '支出',
    time: '2025-02-20 18:00:00',
  },
];

const Fund = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Data.length / 10);
  const [curData, setCurData] = useState<any[]>([]);

  useEffect(() => {
    setCurData(Data.slice((currentPage - 1) * 10, currentPage * 10));
  }, [currentPage]);

  return (
    <div className="container mx-auto p-4">
      <Label className="block text-2xl my-2 font-bold text-center">我的钱包</Label>
      <Table className="w-full overflow-x-auto">
        <TableHeader>
          <TableRow>
            <TableHead>名称</TableHead>
            <TableHead>类型</TableHead>
            <TableHead>金额（元）</TableHead>
            <TableHead>时间</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {curData.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="text-nowrap">{invoice.name}</TableCell>
              <TableCell className="text-nowrap">
                <span
                  className={`${
                    invoice.status === '支出'
                      ? 'text-red-500 bg-red-100'
                      : 'text-green-500 bg-green-100'
                  } py-1 px-2 rounded-md`}
                >
                  {invoice.status}
                </span>
              </TableCell>
              <TableCell className="text-nowrap">{invoice.price}</TableCell>
              <TableCell className="text-nowrap">{invoice.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SimplePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Fund;
