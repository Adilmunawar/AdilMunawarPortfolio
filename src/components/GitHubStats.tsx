
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const GitHubStats = () => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Generate mock data since GitHub API requires authentication
    // In a real implementation, you'd use GitHub GraphQL API with authentication
    const generateMockData = () => {
      const data: ContributionDay[] = [];
      const today = new Date();
      const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
      
      let total = 0;
      for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
        const count = Math.floor(Math.random() * 15); // Random contributions 0-14
        const level = count === 0 ? 0 : count <= 3 ? 1 : count <= 6 ? 2 : count <= 9 ? 3 : 4;
        
        data.push({
          date: new Date(d).toISOString().split('T')[0],
          count,
          level
        });
        total += count;
      }
      
      setContributions(data);
      setTotalContributions(total);
      setIsLoading(false);
    };

    generateMockData();
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-gray-800';
      case 1: return 'bg-emerald-900';
      case 2: return 'bg-emerald-700';
      case 3: return 'bg-emerald-500';
      case 4: return 'bg-emerald-300';
      default: return 'bg-gray-800';
    }
  };

  const getWeeks = () => {
    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];
    
    contributions.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay();
      
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      
      currentWeek.push(day);
      
      if (index === contributions.length - 1) {
        weeks.push(currentWeek);
      }
    });
    
    return weeks;
  };

  if (isLoading) {
    return (
      <Card className="p-6 bg-cyber-gray/20 border-cyber-cyan/30 backdrop-blur-xl">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-52 gap-1">
            {Array.from({ length: 365 }).map((_, i) => (
              <div key={i} className="w-3 h-3 bg-gray-800 rounded-sm"></div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-cyber-gray/20 border-cyber-cyan/30 backdrop-blur-xl hover:border-cyber-cyan/60 transition-all duration-500 group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">GitHub Contributions</h3>
          <div className="text-cyber-cyan font-mono text-sm">
            {totalContributions.toLocaleString()} contributions
          </div>
        </div>
        
        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-2">@adilmunawar - Last 12 months</div>
        </div>
        
        <div className="overflow-x-auto">
          <div className="grid grid-flow-col auto-cols-max gap-1 min-w-full">
            {getWeeks().map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {week.map((day) => (
                  <div
                    key={day.date}
                    className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)} hover:ring-2 hover:ring-cyber-cyan/50 transition-all duration-200 cursor-pointer group/day`}
                    title={`${day.count} contributions on ${new Date(day.date).toLocaleDateString()}`}
                  >
                    <div className="w-full h-full rounded-sm group-hover/day:scale-110 transition-transform duration-200"></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map(level => (
              <div key={level} className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`}></div>
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </Card>
  );
};

export default GitHubStats;
