import React from 'react';
import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
// import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {};

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12">
        {/* Email Subscription */}
        {/* <div className="mb-16">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        <Input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email to get the latest news. *"
                            className="max-w-md"
                            disabled={isLoading}
                        />
                        <Button onClick={handleSubscribe} disabled={isLoading} className="bg-red-500 hover:bg-red-600 text-white">
                            {isLoading ? 'Submitting...' : 'Subscribe'}
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                        By submitting this form, you're consenting to the use of your personal information by CrossWise to receive relevant emails
                        about our upcoming services and promotions.
                    </p>
                </div> */}

        {/* Footer Navigation */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Full Stack GenAI
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Integrations
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Governance, Security & Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Capabilities</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Generate & Predict
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Generate & Experiment
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Generate & Personalize
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Comply
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Analyze
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Industries</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Financial Services
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Retail & Ecommerce
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Telecommunications
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Travel & Hospitality
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Resource Library
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    CrossWise Academy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Glossary
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted-foreground hover:text-foreground">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div> */}

        <div className="text-sm text-muted-foreground text-center md:text-left mt-4">
          © {currentYear} Kyrie. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
