import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router';
import { FitnessPlan, useFitnessStore } from '@/store/fitness-store';
import Page404 from '../page404';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TrainingDetailPage from '@/components/detail-page';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fitnessData } = useFitnessStore();

  const data: FitnessPlan | undefined = fitnessData.find(
    (item) => item.id === parseInt(id ?? '500')
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!id || !data) {
    return <Page404 />;
  }

  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <Button className="w-fit" variant="outline" onClick={() => navigate(-1)}>
        <ArrowLeft className="w-6 h-6 cursor-pointer" /> 返回
      </Button>
      {/* <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{data?.name}</h1>
        <p className="text-sm text-gray-500">{data?.description}</p>
      </div> */}
      <TrainingDetailPage trainingPlan={data!}></TrainingDetailPage>
    </div>
  );
};

Detail.propTypes = {};

export default Detail;
