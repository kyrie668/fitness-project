'use client';

import { useState } from 'react';
import { Star, Heart, Clock, Calendar, User, ChevronDown, Check } from 'lucide-react';
import { FitnessPlan, useFitnessStore } from '@/store/fitness-store';
import { ImageMap } from '@/pages/home/components/feature-section';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';

interface TrainingDetailPageProps {
  trainingPlan: FitnessPlan;
  isBuy?: boolean;
}

export default function TrainingDetailPage({
  trainingPlan,
  isBuy = false,
}: TrainingDetailPageProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [curData, setCurData] = useState<FitnessPlan>(trainingPlan);

  const { fitnessData, updateFitnessData } = useFitnessStore();

  const handleBuy = () => {
    updateFitnessData(trainingPlan.id, {
      ...trainingPlan,
      isBuy: true,
    });
    setCurData({
      ...curData,
      isBuy: true,
    });
  };

  const handleTodayCheck = () => {
    let newCurrentDay = curData.currentDay + 1;
    if (newCurrentDay > curData.planDay) {
      newCurrentDay = curData.planDay;
    }
    updateFitnessData(trainingPlan.id, {
      ...curData,
      currentDay: newCurrentDay,
    });
    setCurData({
      ...curData,
      currentDay: newCurrentDay,
    });
  };

  return (
    <div className="w-[100%] mx-auto px-4 py-6">
      {/* 顶部导航和品牌 */}
      {/* <div className="flex items-center mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mr-2">
            <span className="text-white font-bold">健身</span>
          </div>
          <span className="font-bold text-lg">分秀</span>
        </div>

        <div className="flex items-center ml-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full bg-orange-400 text-white flex items-center justify-center text-xs mx-0.5"
            >
              精
            </div>
          ))}
        </div>

        <div className="flex items-center ml-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
          ))}
          <span className="text-red-500 ml-1">{trainingPlan.rating}</span>
        </div>

       

        <div className="ml-auto flex items-center">
          <button className="flex items-center text-blue-500 mr-4">
            <span className="mr-1">联系客服</span>
          </button>
          <button className="flex items-center border border-gray-300 rounded px-3 py-1">
            <span className="mr-1">进入店铺</span>
          </button>
        </div>
      </div> */}

      {/* 主要内容区域 */}
      <div className="flex flex-col justify-center md:flex-row">
        {/* 左侧图片区域 */}
        <div className="w-full md:w-1/2 pr-6">
          <div className="relative">
            <img
              src={ImageMap[trainingPlan.category as keyof typeof ImageMap]}
              alt={trainingPlan.name}
              width={600}
              height={500}
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-4 text-xl">
              在线购买 专业指导
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">训练内容</h3>
              <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-blue-500">
                {isCollapsed ? '展开' : '收起'}
              </button>
            </div>

            {!isCollapsed && (
              <div className="whitespace-pre-line">{trainingPlan.trainingContent}</div>
            )}
          </div>
        </div>

        {/* 右侧详情区域 */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">
            {trainingPlan.name} - {trainingPlan.category}计划 {trainingPlan.suitableGender}专属
          </h1>

          <div className="flex items-center mb-6">
            <span className="text-red-500 text-3xl font-bold">¥{trainingPlan.price}</span>
          </div>

          {/* <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">配送</span>
            <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>24小时内</span>
            </div>
            <span className="mx-2">承诺24小时内发送</span>
            <span className="mx-2">快递: 免运费</span>
            <span>北京 至 深圳福田</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div> */}

          {/* 训练计划详情 */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2">
                {trainingPlan.category}
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm mr-2">
                {trainingPlan.suitableGender}
              </span>
              <div className="flex items-center text-gray-600 text-sm">
                <User className="w-4 h-4 mr-1" />
                <span>适合年龄: {trainingPlan.suitableAge}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm ml-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{trainingPlan.planDay}天计划</span>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{trainingPlan.description}</p>

            {/* <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">训练内容</h3>
                <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-blue-500">
                  {isCollapsed ? '展开' : '收起'}
                </button>
              </div>

              {!isCollapsed && (
                <div className="whitespace-pre-line">{trainingPlan.trainingContent}</div>
              )}
            </div> */}
          </div>
          <div className="flex ">
            <button
              onClick={handleBuy}
              disabled={curData.isBuy}
              className="flex-1 bg-orange-500 disabled:bg-gray-400 text-white py-3 text-center text-lg font-medium"
            >
              {curData.isBuy ? (
                <div className="flex items-center justify-center">
                  <Check className="w-4 h-4 mr-2"></Check>已购买
                </div>
              ) : (
                '立即购买'
              )}
            </button>
            {/* <button className="flex-1 bg-yellow-400 text-white py-3 text-center text-lg font-medium">
              加入购物车
            </button> */}
            <button
              className="ml-2 w-12 h-12 border border-gray-200 flex items-center justify-center"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart
                className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
              />
            </button>
          </div>
          {isBuy && (
            <div className=" mt-2 mb-6">
              <div className="w-full flex items-center">
                <span className="text-nowrap">当前进度：</span>
                <Progress value={(curData.currentDay / curData.planDay) * 100} max={100} />
                <span className="text-nowrap">
                  {curData.currentDay}/{curData.planDay} 天
                </span>
              </div>
              <div className="flex items-center gap-2">
                {curData.currentDay < curData.planDay && (
                  <Button
                    disabled={curData.currentDay >= curData.planDay}
                    className="my-2 bg-orange-500"
                    onClick={handleTodayCheck}
                    variant="destructive"

                  >
                    今日打卡
                  </Button>
                )}
                {curData.currentDay >= curData.planDay && (
                  <Button
                    disabled={curData.currentDay < curData.planDay}
                    className="my-2"
                    onClick={handleTodayCheck}
                    variant="default"
                  >
                    退款
                  </Button>
                )}
              </div>
            </div>
          )}
          {curData.currentDay < curData.planDay && (
            <p className="bg-green-100 w-fit text-green-700 px-4 py-2 rounded-full text-xl ml-2">
              完成打卡后退款
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
