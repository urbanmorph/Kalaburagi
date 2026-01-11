    // Alternate Industries Analysis (New Economic Drivers)
    alternateIndustries: {
        overview: {
            totalInvestment: 2450, // ₹ crore (Garment 650 + Limestone 500 + Aerospace 800 + Pharma 500)
            totalJobs: 56700, // Direct jobs (26,000 + 12,000 + 12,000 + 6,700)
            gddpContribution: 1242, // ₹ crore/year by 2034
            percentOfTarget: 3.58, // % of ₹34,750 cr GDDP target
            status: "Planning & Feasibility Stage"
        },
        
        industries: [
            {
                id: "garments",
                name: "Garments & Textiles",
                icon: "👔",
                priority: "HIGHEST",
                priorityNote: "₹390cr PM MITRA funding approved (Dec 2024)",
                
                investment: {
                    total: 650,
                    breakdown: {
                        infrastructure: 150,
                        factories: 200,
                        machinery: 300
                    },
                    financing: {
                        pmMitra: 390,
                        private: 195,
                        banks: 65
                    }
                },
                
                impact: {
                    jobs: {
                        direct: 26000,
                        indirect: 17000,
                        total: 43000,
                        skillLevel: "Semi-skilled (60% women)",
                        salary: "₹12,000-18,000/month"
                    },
                    revenue: {
                        year2034: 1800,
                        domestic: 1080,
                        export: 720,
                        exportPercent: 40
                    },
                    gddp: {
                        contribution: 540,
                        percentOfTarget: 1.55,
                        multiplier: 1.5
                    }
                },
                
                timeline: {
                    phase1: "2026-2027: Land acquisition, first 5 units operational",
                    phase2: "2027-2029: Scale to 15 units, exports begin",
                    phase3: "2029-2034: Full 30 units, ₹1,800cr revenue",
                    firstRevenue: "18 months",
                    fullScale: "96 months"
                },
                
                location: "Sedam/Afzalpur (300 acres near NH-50)",
                
                products: [
                    "Readymade garments (shirts, trousers, kurtas)",
                    "Home textiles (bedsheets, curtains, towels)",
                    "Export quality apparel (EU, Middle East)"
                ],
                
                buyers: {
                    domestic: ["Reliance Trends", "Pantaloons", "Max Fashion", "V-Mart"],
                    export: ["H&M India", "Zara India", "Marks & Spencer"],
                    ecommerce: ["Amazon Fashion", "Flipkart Fashion", "Myntra"]
                },
                
                risks: [
                    {
                        risk: "Labor shortage (26,000 workers)",
                        severity: "high",
                        mitigation: "ITI training, attract women workers, return migrants"
                    },
                    {
                        risk: "PM MITRA delays",
                        severity: "medium",
                        mitigation: "Direct engagement with Ministry of Textiles"
                    }
                ],
                
                confidence: "HIGH (85%)",
                recommendation: "PROCEED IMMEDIATELY - Funding approved, fastest job creation",
                
                nextSteps: [
                    "Q1 2026: PM MITRA MoU signing, land identification",
                    "Q2 2026: DPIIT application, investor roadshow Bangalore",
                    "Q3 2026: Land acquisition (200 acres), ITI curriculum",
                    "Q4 2026: First 5 factories construction begins"
                ]
            },
            
            {
                id: "limestone",
                name: "Limestone & Cement",
                icon: "🏗️",
                priority: "HIGH",
                priorityNote: "2.5-4 billion MT reserves, 200-400 year supply",
                
                investment: {
                    total: 500,
                    breakdown: {
                        mining: 100,
                        crushers: 80,
                        cement: 320
                    },
                    financing: {
                        private: 350,
                        banks: 100,
                        government: 50
                    }
                },
                
                impact: {
                    jobs: {
                        direct: 12000,
                        indirect: 8000,
                        total: 20000,
                        skillLevel: "Mix (operators, engineers, managers)",
                        salary: "₹15,000-50,000/month"
                    },
                    revenue: {
                        year2034: 750,
                        cement: 600,
                        aggregates: 150,
                        exportPotential: "Minimal (local consumption)"
                    },
                    gddp: {
                        contribution: 338,
                        percentOfTarget: 0.97,
                        multiplier: 1.5
                    }
                },
                
                timeline: {
                    phase1: "2026-2028: Mining leases, 3 crushers operational",
                    phase2: "2028-2030: First mini cement plant (1,000 TPD)",
                    phase3: "2030-2034: Scale to 3,000 TPD, 2nd plant",
                    firstRevenue: "24-30 months",
                    fullScale: "96 months"
                },
                
                location: "Chincholi, Sedam, Chittapur taluks (existing deposits)",
                
                products: [
                    "Cement (OPC 43/53 grade, PPC)",
                    "Aggregates (construction, road building)",
                    "Ready-mix concrete (urban Kalaburagi)"
                ],
                
                buyers: {
                    local: "Kalaburagi construction (40%)",
                    regional: "Hyderabad, North Karnataka (50%)",
                    infrastructure: "NH-50 widening, airports, metros (10%)"
                },
                
                risks: [
                    {
                        risk: "Mining lease delays (24-36 months)",
                        severity: "high",
                        mitigation: "Parallel applications, political support, fast-track"
                    },
                    {
                        risk: "Environmental clearances",
                        severity: "medium",
                        mitigation: "Comprehensive EIA, community engagement"
                    },
                    {
                        risk: "Cement market oversupply",
                        severity: "medium",
                        mitigation: "Gradual scaling, specialty cements"
                    }
                ],
                
                confidence: "MEDIUM-HIGH (75%)",
                recommendation: "PROCEED - Resource proven, but regulatory timeline critical",
                
                nextSteps: [
                    "Q1 2026: Geological survey ₹50L, revenue sharing model with GoK",
                    "Q2 2026: Mining lease applications (3-5 sites), investor outreach",
                    "Q3-Q4 2026: Environmental baseline studies, crusher site selection",
                    "2027: First lease approval target, crusher construction"
                ]
            },
            
            {
                id: "aerospace",
                name: "Aerospace Components",
                icon: "✈️",
                priority: "MEDIUM-HIGH",
                priorityNote: "200km from Hyderabad aerospace cluster ($2.5B)",
                
                investment: {
                    total: 800,
                    breakdown: {
                        infrastructure: 150,
                        buildings: 200,
                        machinery: 450
                    },
                    financing: {
                        private: 240,
                        banks: 320,
                        subsidies: 120,
                        vendorCredit: 80,
                        ridf: 40
                    }
                },
                
                impact: {
                    jobs: {
                        direct: 12000,
                        indirect: 8000,
                        total: 20000,
                        skillLevel: "Highly skilled (63% ITI+, 20% engineers)",
                        salary: "₹20,000-80,000/month"
                    },
                    revenue: {
                        year2034: 1200,
                        defence: 480,
                        commercial: 600,
                        mro: 120,
                        exportPercent: 60
                    },
                    gddp: {
                        contribution: 360,
                        percentOfTarget: 1.04,
                        multiplier: 1.7
                    }
                },
                
                timeline: {
                    phase1: "2026-2028: Land, ITI curriculum, first 5 factories, AS9100 consultant",
                    phase2: "2027-2028: Trial production, AS9100 certification",
                    phase3: "2028-2031: Scale to 15 factories, exports, NADCAP",
                    phase4: "2032-2034: 30 factories, R&D center",
                    firstRevenue: "45-63 months",
                    fullScale: "96 months"
                },
                
                location: "Sedam/Afzalpur (500 acres, industrial zone)",
                
                products: [
                    "Non-critical precision components (brackets, fasteners)",
                    "Sheet metal parts (aircraft interiors)",
                    "CNC machined parts (landing gear components)"
                ],
                
                buyers: {
                    defence: ["HAL (₹260cr)", "Tata Advanced Systems (₹100cr)", "Bharat Forge (₹120cr)"],
                    commercial: ["Boeing India (₹200cr)", "Airbus (₹160cr)"],
                    tier1: ["Collins Aerospace (₹80cr)", "Safran (₹160cr)"],
                    mro: ["Air India Engineering", "GMR Aero Technic"]
                },
                
                risks: [
                    {
                        risk: "Quality failures (aerospace 10-100 PPM standard)",
                        severity: "critical",
                        mitigation: "Triple-layer quality, German/Israeli partnership ₹5cr, 100% CMM inspection"
                    },
                    {
                        risk: "AS9100 certification failure (60% first-time fail rate)",
                        severity: "critical",
                        mitigation: "Consultant from Day 1, build compliance into factory design, mock audits"
                    },
                    {
                        risk: "Long sales cycles (12-18 months OEM approval)",
                        severity: "high",
                        mitigation: "Start OEM outreach Year 1, parallel approvals"
                    }
                ],
                
                confidence: "MEDIUM-HIGH (70-75%)",
                recommendation: "PROCEED with heavy quality investment - Unforgiving industry, one defect destroys reputation",
                
                nextSteps: [
                    "Q1 2026: Feasibility study ₹25L, aerospace consultant RFP, contact Hyderabad OEMs",
                    "Q2 2026: Market study (OEM interviews), ITI curriculum (partner HAL), 24×7 power coordination",
                    "Q3 2026: Interim report, investor roadshows Bangalore/Hyderabad, land MoU KIADB",
                    "Q4 2026: AS9100 consultant hired, ITI equipment ₹7.5cr, 3-5 OEM MoUs"
                ]
            },
            
            {
                id: "pharma",
                name: "Pharma Packaging",
                icon: "💊",
                priority: "MEDIUM-HIGH",
                priorityNote: "250km from Hyderabad Pharma City (world's largest)",
                
                investment: {
                    total: 500,
                    breakdown: {
                        infrastructure: 80,
                        buildings: 120,
                        machinery: 300
                    },
                    financing: {
                        private: 150,
                        banks: 200,
                        subsidies: 75,
                        vendorCredit: 50,
                        ridf: 25
                    }
                },
                
                impact: {
                    jobs: {
                        direct: 4000,
                        indirect: 2700,
                        total: 6700,
                        skillLevel: "Skilled (60% GMP-certified)",
                        salary: "₹15,000-50,000/month"
                    },
                    revenue: {
                        year2034: 900,
                        domestic: 630,
                        export: 270,
                        exportPercent: 30
                    },
                    gddp: {
                        contribution: 270,
                        percentOfTarget: 0.78,
                        multiplier: 1.3
                    }
                },
                
                timeline: {
                    phase1: "2026-2027: Land, Schedule M consultant, pharma MoUs",
                    phase2: "2027-2028: First 5 factories, Schedule M licensing, trial production",
                    phase3: "2028-2031: Scale to 15 factories, ISO 15378, exports",
                    phase4: "2032-2034: 20 factories, WHO-GMP, ₹900cr revenue",
                    firstRevenue: "24-30 months",
                    fullScale: "96 months"
                },
                
                location: "Sedam/Afzalpur (200 acres, pharma zone)",
                
                products: [
                    "Blister packs (Alu-Alu, PVC-Alu for tablets/capsules)",
                    "HDPE/PET bottles (child-resistant caps)",
                    "Cartons & labels (secondary packaging)"
                ],
                
                buyers: {
                    hyderabad: ["Dr. Reddy's (₹250cr)", "Hetero (₹216cr)", "Aurobindo (₹176cr)", "Laurus Labs (₹120cr)"],
                    bangalore: ["Biocon (₹60cr)", "Strides (₹60cr)"],
                    export: ["Africa (₹120cr antimalarials/ARVs)", "Middle East (₹60cr)"]
                },
                
                risks: [
                    {
                        risk: "Schedule M license delays (6-9 months normal, 12-18 if issues)",
                        severity: "critical",
                        mitigation: "Hire ex-CDSCO inspector ₹30L/year, mock audits quarterly, build right from Day 1"
                    },
                    {
                        risk: "Quality failures (pharma zero-tolerance)",
                        severity: "high",
                        mitigation: "Triple-check quality, 100% vision inspection, zero-defect guarantee"
                    },
                    {
                        risk: "Hyderabad Pharma City Phase 2 delays",
                        severity: "medium",
                        mitigation: "Diversify to Bangalore 15%, export 30%, other cities 10%"
                    }
                ],
                
                confidence: "MEDIUM-HIGH (75-80%)",
                recommendation: "PROCEED - Perfect timing for Pharma City Phase 2 (2029-2030), higher value/job than garments",
                
                nextSteps: [
                    "Q1 2026: Market study ₹15L, 200 acres land identified, contact 10 Hyderabad pharma companies",
                    "Q2 2026: Land acquisition (KIADB, 150 acres), Schedule M consultant ₹30L/year, MoU with 2-3 pharma companies",
                    "Q3-Q4 2026: Infrastructure tenders (roads ₹25cr, power ₹20cr, water ₹10cr), first 5 entrepreneurs, ITI course design"
                ]
            }
        ],
        
        // Comparison matrix
        comparison: {
            headers: ["Industry", "Investment", "Jobs", "Revenue 2034", "GDDP %", "Value/Job", "Time to Revenue", "Risk Level"],
            data: [
                {
                    industry: "Garments",
                    investment: "₹650cr",
                    jobs: "26,000",
                    revenue: "₹1,800cr",
                    gddp: "1.55%",
                    valuePerJob: "₹5.1L",
                    timeToRevenue: "18 months",
                    risk: "Low-Medium"
                },
                {
                    industry: "Limestone",
                    investment: "₹500cr",
                    revenue: "₹750cr",
                    jobs: "12,000",
                    gddp: "0.97%",
                    valuePerJob: "₹28.2L",
                    timeToRevenue: "24-30 months",
                    risk: "Medium-High (regulatory)"
                },
                {
                    industry: "Aerospace",
                    investment: "₹800cr",
                    jobs: "12,000",
                    revenue: "₹1,200cr",
                    gddp: "1.04%",
                    valuePerJob: "₹30L (HIGHEST)",
                    timeToRevenue: "45-63 months (LONGEST)",
                    risk: "Medium-High (quality)"
                },
                {
                    industry: "Pharma Packaging",
                    investment: "₹500cr",
                    jobs: "6,700",
                    revenue: "₹900cr",
                    gddp: "0.78%",
                    valuePerJob: "₹33.8L (HIGHEST)",
                    timeToRevenue: "24-30 months",
                    risk: "Medium (regulatory)"
                }
            ]
        },
        
        // Strategic recommendations
        recommendations: {
            immediate: {
                priority1: {
                    industry: "Garments & Textiles",
                    action: "Execute immediately - ₹390cr PM MITRA approved (gazetted Dec 2024)",
                    timeline: "Q1 2026: Land acquisition, MoU signing",
                    rationale: "Funding secured, fastest job creation (26,000), proven model, 18-month revenue"
                },
                priority2: {
                    industry: "Limestone & Cement",
                    action: "Initiate geological survey & mining lease applications in parallel",
                    timeline: "Q1 2026: Survey ₹50L, lease applications",
                    rationale: "Resource proven (2.5-4 billion MT), but regulatory lead time 24-36 months - start NOW"
                }
            },
            
            shortTerm: {
                priority3: {
                    industry: "Pharma Packaging",
                    action: "Market validation + Schedule M consultant hiring",
                    timeline: "Q2 2026: Pharma company MoUs, consultant onboarding",
                    rationale: "Perfect timing for Pharma City Phase 2 (2029-2030), medium complexity, 30-month revenue"
                },
                priority4: {
                    industry: "Aerospace Components",
                    action: "Feasibility study + OEM engagement + quality infrastructure planning",
                    timeline: "Q2-Q3 2026: Consultant selection, Hyderabad OEM meetings, ITI curriculum",
                    rationale: "Highest value/job (₹30L) BUT longest timeline (45-63 months) and most unforgiving quality standards"
                }
            },
            
            sequencing: {
                rationale: "Stagger to avoid overwhelming PMU and financing capacity",
                year1: "Garments (execute) + Limestone (regulatory)",
                year2: "Pharma (execute) + Aerospace (planning)",
                year3: "Aerospace (execute) + All 4 operational"
            }
        },
        
        // Framework integration
        frameworkIntegration: {
            totalBudget: {
                original: 17700,
                withIndustries: 20150,
                increase: 2450,
                percentIncrease: 13.8
            },
            
            phaseAllocation: {
                phase1: {
                    garments: 150,
                    limestone: 100,
                    aerospace: 150,
                    pharma: 80,
                    subtotal: 480
                },
                phase2: {
                    garments: 350,
                    limestone: 300,
                    aerospace: 350,
                    pharma: 325,
                    subtotal: 1325
                },
                phase3: {
                    garments: 150,
                    limestone: 100,
                    aerospace: 300,
                    pharma: 95,
                    subtotal: 645
                }
            },
            
            synergies: [
                "Phase 1 power: 24×7 industrial feeders essential for aerospace/pharma clean rooms (₹50 MVA substation by Q4 2027)",
                "Skills: Convert 3 ITIs to aerospace/pharma trades, train 1,500/year × 8 years = 12,000 (covers aerospace + pharma needs)",
                "Return migrants: Target 2,400 from Bangalore (20% of aerospace, 5% of garments, 4% of pharma)",
                "Limestone: Supplies cement ₹40cr for garment/aerospace/pharma factory construction (20 factories × ₹2cr each)",
                "NH-44 Kalaburagi-Hyderabad: Lobby NHAI for 6-lane upgrade ₹500cr (benefits aerospace + pharma JIT logistics)"
            ]
        }
    },
    
