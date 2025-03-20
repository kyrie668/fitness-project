import SimplePagination from '@/components/pagination';
import { Button } from '@/components/ui/button';
import { FitnessPlan, useFitnessStore } from '@/store/fitness-store';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

export const ImageMap = {
  增肌: '/public/zengji.png',
  减脂: '/public/jianzhi.png',
  塑形: '/public/suxing.png',
  康复训练: '/public/kangfu.png',
  综合训练: '/public/zonghe.png',
  瑜伽: '/public/yujia.png',
};

export default function TrainingPlanGrid() {
  const { fitnessData } = useFitnessStore();
  const [currentPage, setCurrentPage] = useState(1);

  const [curData, setCurData] = useState<FitnessPlan[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [curCategory, setCurCategory] = useState<string>('全部');
  const navigate = useNavigate();

  const totalPages = useMemo(() => {
    if (curCategory !== '全部') {
      return Math.ceil(
        fitnessData.filter((item) => item.isBuy).filter((item) => item.category === curCategory)
          .length / 10
      );
    }
    return Math.ceil(fitnessData.filter((item) => item.isBuy).length / 10);
  }, [fitnessData, curCategory]);

  useEffect(() => {
    setCurData(
      fitnessData.filter((item) => item.isBuy).slice((currentPage - 1) * 10, currentPage * 10)
    );
  }, [currentPage, fitnessData]);

  useEffect(() => {
    if (curCategory !== '全部') {
      setCurData(
        fitnessData
          .filter((item) => item.isBuy)
          .filter((item) => item.category === curCategory)
          .slice((currentPage - 1) * 10, currentPage * 10)
      );
    } else {
      setCurData(
        fitnessData.filter((item) => item.isBuy).slice((currentPage - 1) * 10, currentPage * 10)
      );
    }
    setCurrentPage(1);
  }, [curCategory, fitnessData]);

  useEffect(() => {
    setCategoryList(['全部', ...Array.from(new Set(fitnessData.map((item) => item.category)))]);
  }, [fitnessData]);

  return (
    <>
      <div className="container mx-auto flex justify-end mb-4 p-4">
        <div className="flex flex-wrap gap-2">
          {categoryList.map((item) => (
            <div
              key={item}
              onClick={() => setCurCategory(item)}
              className={`cursor-pointer  text-xs px-2 py-1 rounded-full ${
                curCategory === item ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {curData.map((plan) => (
          <div
            key={plan.id}
            onClick={() => navigate(`/buyDetail/${plan.id}`)}
            className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-40 w-full">
              <img
                src={ImageMap[plan.category as keyof typeof ImageMap]}
                alt={plan.name}
                className="w-full h-full object-cover"
              />
              {plan.isBuy && (
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  已购买
                </div>
              )}
            </div>

            {/* 内容 */}
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {plan.category}
                </span>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  {plan.suitableGender}
                </span>
              </div>

              <h3 className="font-bold text-lg mb-1 truncate">{plan.name}</h3>

              <div className="text-sm text-gray-600 mb-2">适合年龄: {plan.suitableAge}</div>

              <div className="flex justify-between items-center mt-3">
                <span className="text-red-500 font-bold">¥{plan.price}</span>
                <span className="text-xs text-gray-500">
                  {plan.currentDay === 0 ? (
                    <span className="text-gray-500 bg-gray-100 px-2 py-1 rounded-full">未开始</span>
                  ) : plan.currentDay < plan.planDay ? (
                    <span className="text-orange-500 bg-orange-100 px-2 py-1 rounded-full">
                      进行中
                    </span>
                  ) : (
                    <span className="text-green-500 bg-green-100 px-2 py-1 rounded-full">
                      已完成
                    </span>
                  )}
                </span>
                {/* <span className="text-xs text-gray-500">{plan.planDay}天计划</span> */}
              </div>
              <Button
                variant="destructive"
                className="w-full my-1 bg-orange-500"
                onClick={() => navigate(`/buyDetail/${plan.id}`)}
              >
                开始训练
              </Button>
            </div>
          </div>
        ))}
      </div>
      <SimplePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
