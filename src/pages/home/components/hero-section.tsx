'use client';

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { redirect } from 'react-router';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl">
            努力充实自己，而不是焦虑时光
          </h1>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              <p>在多数故事里，都是英俊王子打败坏蛋，</p>
              <p>和公主幸福的生活在一起</p>
              <p>由此可见，形象好，结局更完美</p>
            </p>
          </div>
          
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="flex gap-4 opacity-50">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-64 w-32 rotate-12 transform rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500"
              style={{
                opacity: 0.1 * (4 - i),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
