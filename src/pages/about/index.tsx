import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { redirect } from 'react-router';
import { withAuthGuard } from '@/components/with-auth-guard';

const About = withAuthGuard(() => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Search Planner</h1>
          <p className="text-xl text-muted-foreground">
            Create winning search campaigns in minutes, not hours
          </p>
        </div>

        <div className="grid gap-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Keyword Generation</h2>
              <p className="text-lg text-muted-foreground">
                Discover high-impact keywords with ease. It analyzes trends and competition to help
                you identify the most relevant and profitable keywords for your campaigns.
              </p>
              <Button variant="outline" className="group" onClick={() => redirect('/home')}>
                Start generating
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative">
              <img src="/vite.svg" alt="Keyword Research & Planning" width={600} />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-last lg:order-first">
              <img src="/vite.svg" alt="Ad Copy Generator" width={600} />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Keyword Grouping</h2>
              <p className="text-lg text-muted-foreground">
                Organize your keywords into logical clusters with Google ads best practices. This
                feature ensures better Quality Scores, higher click-through rates, and optimized
                campaign efficiency.
              </p>
              <Button variant="outline" className="group" onClick={() => redirect('/home')}>
                Start organizing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Ad Copy Generation</h2>
              <p className="text-lg text-muted-foreground">
                Effortlessly Generate compelling ads tailored to your audience, website and keyword
                groups. This tool helps you create ad copy that aligns with Google's policies while
                delivering engaging ad copies to enhance ad performance and relevance.
              </p>
              <Button variant="outline" className="group" onClick={() => redirect('/home')}>
                Generate ads
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative">
              <img src="/vite.svg" alt="Ad Copy Generation" width={600} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.propTypes = {};

export default About;
