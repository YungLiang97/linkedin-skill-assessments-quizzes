// Gaming Report Dashboard JavaScript
class GameReportDashboard {
    constructor() {
        this.currentGame = 'fortnite';
        this.charts = {};
        this.gameData = this.initializeGameData();
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeTheme();
        this.setupCharts();
        this.loadGameData();
        this.setupSearch();
        this.updateLastUpdated();
        this.initializeAnimations();
    }

    initializeGameData() {
        return {
            fortnite: {
                title: 'Fortnite',
                developer: 'Epic Games',
                genre: 'Battle Royale',
                release: '2017',
                description: 'Epic\'s battle royale phenomenon continues to dominate the gaming landscape with innovative gameplay mechanics, frequent updates, and massive cultural impact. The game maintains its position as one of the most-watched and played titles globally.',
                tags: ['Free-to-Play', 'Cross-Platform', 'Esports', 'Live Events'],
                rating: 4.8,
                image: "data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='fortnite' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23fortnite)' rx='20'/%3E%3Ctext x='60' y='75' font-family='Arial, sans-serif' font-size='40' fill='white' text-anchor='middle'%3E🏗️%3C/text%3E%3C/svg%3E",
                metrics: {
                    players: '400M',
                    views: '2.1B',
                    revenue: '$5.8B',
                    esports: '$40M'
                },
                changes: {
                    players: '+12.5%',
                    views: '+8.3%',
                    revenue: '+15.2%',
                    esports: '+22.1%'
                }
            },
            valorant: {
                title: 'Valorant',
                developer: 'Riot Games',
                genre: 'Tactical Shooter',
                release: '2020',
                description: 'Riot\'s tactical first-person shooter combines precise gunplay with unique agent abilities. The game has rapidly built a competitive esports scene and maintains strong viewership on streaming platforms.',
                tags: ['Free-to-Play', 'Competitive', 'Esports', '5v5'],
                rating: 4.6,
                image: "data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='valorant' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff4654;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ff1744;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23valorant)' rx='20'/%3E%3Ctext x='60' y='75' font-family='Arial, sans-serif' font-size='40' fill='white' text-anchor='middle'%3E🎯%3C/text%3E%3C/svg%3E",
                metrics: {
                    players: '180M',
                    views: '1.8B',
                    revenue: '$2.1B',
                    esports: '$25M'
                },
                changes: {
                    players: '+18.7%',
                    views: '+22.1%',
                    revenue: '+31.4%',
                    esports: '+45.2%'
                }
            },
            genshin: {
                title: 'Genshin Impact',
                developer: 'miHoYo',
                genre: 'Action RPG',
                release: '2020',
                description: 'An open-world action RPG that has redefined mobile gaming with console-quality graphics and gameplay. The game continues to break revenue records with its gacha system and regular content updates.',
                tags: ['Free-to-Play', 'Open World', 'Gacha', 'Cross-Platform'],
                rating: 4.5,
                image: "data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='genshin' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300bcd4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23009688;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23genshin)' rx='20'/%3E%3Ctext x='60' y='75' font-family='Arial, sans-serif' font-size='40' fill='white' text-anchor='middle'%3E⚔️%3C/text%3E%3C/svg%3E",
                metrics: {
                    players: '120M',
                    views: '950M',
                    revenue: '$4.2B',
                    esports: '$8M'
                },
                changes: {
                    players: '+9.2%',
                    views: '+15.8%',
                    revenue: '+28.3%',
                    esports: '+67.5%'
                }
            },
            apex: {
                title: 'Apex Legends',
                developer: 'Respawn Entertainment',
                genre: 'Battle Royale',
                release: '2019',
                description: 'A character-based battle royale that combines fast-paced combat with unique legend abilities. The game maintains a strong competitive scene and continues to innovate within the battle royale genre.',
                tags: ['Free-to-Play', 'Hero Shooter', 'Battle Royale', 'Squad-Based'],
                rating: 4.3,
                image: "data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='apex' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6600;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ff3300;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23apex)' rx='20'/%3E%3Ctext x='60' y='75' font-family='Arial, sans-serif' font-size='40' fill='white' text-anchor='middle'%3E🔫%3C/text%3E%3C/svg%3E",
                metrics: {
                    players: '130M',
                    views: '780M',
                    revenue: '$1.8B',
                    esports: '$15M'
                },
                changes: {
                    players: '+5.1%',
                    views: '+12.4%',
                    revenue: '+18.7%',
                    esports: '+25.8%'
                }
            },
            minecraft: {
                title: 'Minecraft',
                developer: 'Mojang Studios',
                genre: 'Sandbox',
                release: '2011',
                description: 'The world\'s best-selling video game continues to thrive with regular updates, educational programs, and a massive creative community. Its influence on gaming culture remains unmatched.',
                tags: ['Creative', 'Sandbox', 'Educational', 'Cross-Platform'],
                rating: 4.9,
                image: "data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='minecraft' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300a82d;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23008a24;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23minecraft)' rx='20'/%3E%3Ctext x='60' y='75' font-family='Arial, sans-serif' font-size='40' fill='white' text-anchor='middle'%3E🧱%3C/text%3E%3C/svg%3E",
                metrics: {
                    players: '300M',
                    views: '1.5B',
                    revenue: '$380M',
                    esports: '$2M'
                },
                changes: {
                    players: '+4.2%',
                    views: '+7.8%',
                    revenue: '+12.1%',
                    esports: '+15.3%'
                }
            }
        };
    }

    setupEventListeners() {
        // Game tab switching
        document.querySelectorAll('.game-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const gameId = e.currentTarget.dataset.game;
                this.switchGame(gameId);
            });
        });

        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
        }

        // Export functionality
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportReport());
        }

        // Time period filters
        document.querySelectorAll('.time-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                this.updateChartsWithPeriod(e.currentTarget.dataset.period);
            });
        });

        // Trend metric selector
        const trendMetric = document.getElementById('trendMetric');
        if (trendMetric) {
            trendMetric.addEventListener('change', (e) => {
                this.updateTrendChart(e.target.value);
            });
        }

        // Scroll animations
        this.setupScrollAnimations();
    }

    initializeTheme() {
        if (this.darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            const moonIcon = document.querySelector('#darkModeToggle i');
            if (moonIcon) {
                moonIcon.className = 'fas fa-sun';
            }
        }
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('darkMode', this.darkMode);
        
        if (this.darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.querySelector('#darkModeToggle i').className = 'fas fa-sun';
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.querySelector('#darkModeToggle i').className = 'fas fa-moon';
        }

        // Re-render charts with new theme
        setTimeout(() => {
            this.setupCharts();
        }, 300);
    }

    switchGame(gameId) {
        if (!this.gameData[gameId]) return;

        this.currentGame = gameId;
        
        // Update active tab
        document.querySelectorAll('.game-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-game="${gameId}"]`).classList.add('active');

        // Update game details
        this.updateGameDetails();
        
        // Update metrics
        this.updateMetrics();
        
        // Update charts
        this.setupCharts();

        // Smooth scroll to game details
        document.querySelector('.game-details-section').scrollIntoView({
            behavior: 'smooth'
        });
    }

    updateGameDetails() {
        const game = this.gameData[this.currentGame];
        
        document.getElementById('gameTitle').textContent = game.title;
        document.getElementById('gameDescription').textContent = game.description;
        document.getElementById('gameImage').src = game.image;
        document.getElementById('gameImage').alt = game.title;

        // Update game meta info
        const metaContainer = document.querySelector('.game-meta');
        metaContainer.innerHTML = `
            <span class="game-developer">${game.developer}</span>
            <span class="game-genre">${game.genre}</span>
            <span class="game-release">${game.release}</span>
        `;

        // Update rating
        document.querySelector('.rating-value').textContent = game.rating;
        
        // Update tags
        const tagsContainer = document.querySelector('.game-tags');
        tagsContainer.innerHTML = game.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
    }

    updateMetrics() {
        const game = this.gameData[this.currentGame];
        const metrics = ['players', 'views', 'revenue', 'esports'];
        
        metrics.forEach((metric, index) => {
            const cards = document.querySelectorAll('.metric-card');
            if (cards[index]) {
                const valueEl = cards[index].querySelector('.value');
                const changeEl = cards[index].querySelector('.change');
                
                if (valueEl && changeEl) {
                    valueEl.textContent = game.metrics[metric];
                    changeEl.textContent = game.changes[metric];
                    
                    // Animate the change
                    valueEl.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        valueEl.style.transform = 'scale(1)';
                    }, 200);
                }
            }
        });
    }

    setupCharts() {
        this.setupMiniCharts();
        this.setupAnalyticsCharts();
        this.setupSocialCharts();
        this.setupEsportsCharts();
    }

    setupMiniCharts() {
        const chartIds = ['playersChart', 'viewsChart', 'revenueChart', 'esportsChart'];
        
        chartIds.forEach((chartId, index) => {
            const canvas = document.getElementById(chartId);
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            
            // Destroy existing chart
            if (this.charts[chartId]) {
                this.charts[chartId].destroy();
            }

            const data = this.generateTimeSeriesData(30);
            
            this.charts[chartId] = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.labels,
                    datasets: [{
                        data: data.values,
                        borderColor: this.getChartColor(index),
                        backgroundColor: this.getChartColor(index, 0.1),
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                        pointHoverRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false }
                    },
                    scales: {
                        x: { display: false },
                        y: { display: false }
                    },
                    interaction: { intersect: false }
                }
            });
        });
    }

    setupAnalyticsCharts() {
        this.setupDemographicsChart();
        this.setupPlatformChart();
        this.setupRegionalChart();
        this.setupTrendChart();
    }

    setupDemographicsChart() {
        const canvas = document.getElementById('demographicsChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        if (this.charts.demographicsChart) {
            this.charts.demographicsChart.destroy();
        }

        this.charts.demographicsChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['13-17', '18-24', '25-34', '35-44', '45+'],
                datasets: [{
                    data: [15, 35, 30, 15, 5],
                    backgroundColor: [
                        '#6366f1',
                        '#8b5cf6',
                        '#06b6d4',
                        '#10b981',
                        '#f59e0b'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }

    setupPlatformChart() {
        const canvas = document.getElementById('platformChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        if (this.charts.platformChart) {
            this.charts.platformChart.destroy();
        }

        this.charts.platformChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['PC', 'PlayStation', 'Xbox', 'Mobile', 'Nintendo Switch'],
                datasets: [{
                    data: [45, 25, 15, 10, 5],
                    backgroundColor: [
                        '#667eea',
                        '#764ba2',
                        '#f093fb',
                        '#f5576c',
                        '#4facfe'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }

    setupRegionalChart() {
        const canvas = document.getElementById('regionalChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        if (this.charts.regionalChart) {
            this.charts.regionalChart.destroy();
        }

        this.charts.regionalChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East & Africa'],
                datasets: [{
                    label: 'Player Distribution (%)',
                    data: [35, 28, 25, 8, 4],
                    backgroundColor: '#6366f1',
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 40,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    setupTrendChart() {
        const canvas = document.getElementById('trendChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        if (this.charts.trendChart) {
            this.charts.trendChart.destroy();
        }

        const data = this.generateTimeSeriesData(90);
        
        this.charts.trendChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Player Count',
                    data: data.values,
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: { display: false }
                    },
                    y: {
                        display: true,
                        grid: { color: 'rgba(0,0,0,0.1)' }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    setupSocialCharts() {
        // Social media sentiment and mentions are handled via CSS animations
        // and don't require Chart.js
        this.animateProgressBars();
    }

    setupEsportsCharts() {
        const canvas = document.getElementById('viewershipChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        if (this.charts.viewershipChart) {
            this.charts.viewershipChart.destroy();
        }

        const data = this.generateTimeSeriesData(12, 'months');
        
        this.charts.viewershipChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Monthly Viewers (M)',
                    data: data.values,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#10b981'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { display: true },
                    y: { 
                        display: true,
                        beginAtZero: true
                    }
                }
            }
        });
    }

    generateTimeSeriesData(points, type = 'days') {
        const labels = [];
        const values = [];
        const now = new Date();
        
        for (let i = points - 1; i >= 0; i--) {
            const date = new Date(now);
            
            if (type === 'months') {
                date.setMonth(date.getMonth() - i);
                labels.push(date.toLocaleDateString('en-US', { month: 'short' }));
            } else {
                date.setDate(date.getDate() - i);
                labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
            }
            
            // Generate realistic trending data
            const baseValue = 100;
            const trend = Math.sin((points - i) / points * Math.PI) * 20;
            const noise = (Math.random() - 0.5) * 10;
            values.push(Math.max(0, baseValue + trend + noise));
        }
        
        return { labels, values };
    }

    getChartColor(index, alpha = 1) {
        const colors = [
            `rgba(99, 102, 241, ${alpha})`,   // Purple
            `rgba(16, 185, 129, ${alpha})`,   // Green  
            `rgba(245, 158, 11, ${alpha})`,   // Yellow
            `rgba(239, 68, 68, ${alpha})`     // Red
        ];
        return colors[index % colors.length];
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.sentiment-fill, .language-progress, .platform-progress');
        
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    }

    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            this.filterContent(query);
        });
    }

    filterContent(query) {
        if (!query) {
            this.showAllContent();
            return;
        }

        // Filter game tabs
        document.querySelectorAll('.game-tab').forEach(tab => {
            const gameName = tab.textContent.toLowerCase();
            if (gameName.includes(query)) {
                tab.style.display = 'flex';
            } else {
                tab.style.display = 'none';
            }
        });

        // Filter news items
        document.querySelectorAll('.news-card').forEach(card => {
            const title = card.querySelector('h3, h4')?.textContent.toLowerCase() || '';
            const content = card.querySelector('p')?.textContent.toLowerCase() || '';
            
            if (title.includes(query) || content.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    showAllContent() {
        document.querySelectorAll('.game-tab, .news-card').forEach(el => {
            el.style.display = '';
        });
    }

    updateChartsWithPeriod(period) {
        const periodMap = {
            '7d': 7,
            '30d': 30,
            '90d': 90,
            '1y': 365
        };
        
        const points = periodMap[period] || 30;
        
        // Update mini charts
        this.setupMiniCharts();
        
        // Update trend chart
        this.setupTrendChart();
    }

    updateTrendChart(metric) {
        const canvas = document.getElementById('trendChart');
        if (!canvas || !this.charts.trendChart) return;

        const metricConfig = {
            players: { label: 'Player Count (M)', color: '#6366f1' },
            revenue: { label: 'Revenue ($M)', color: '#10b981' },
            engagement: { label: 'Engagement Rate (%)', color: '#f59e0b' }
        };

        const config = metricConfig[metric];
        const data = this.generateTimeSeriesData(90);

        this.charts.trendChart.data.datasets[0] = {
            label: config.label,
            data: data.values,
            borderColor: config.color,
            backgroundColor: config.color.replace('1)', '0.1)'),
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
        };

        this.charts.trendChart.update();
    }

    exportReport() {
        // Simple export functionality - in a real app, this would generate a PDF
        const reportData = {
            game: this.currentGame,
            timestamp: new Date().toISOString(),
            metrics: this.gameData[this.currentGame].metrics,
            changes: this.gameData[this.currentGame].changes
        };

        const dataStr = JSON.stringify(reportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `gaming-report-${this.currentGame}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        // Show success message
        this.showNotification('Report exported successfully!', 'success');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#6366f1'};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe cards and sections
        document.querySelectorAll('.metric-card, .analytics-card, .news-card, .sentiment-card, .mentions-card, .keywords-card').forEach(el => {
            observer.observe(el);
        });
    }

    initializeAnimations() {
        // Add CSS for scroll animations
        const style = document.createElement('style');
        style.textContent = `
            .metric-card,
            .analytics-card,
            .news-card,
            .sentiment-card,
            .mentions-card,
            .keywords-card {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            .notification {
                font-family: 'Inter', sans-serif;
                font-weight: 500;
            }
        `;
        document.head.appendChild(style);
    }

    updateLastUpdated() {
        const lastUpdatedEl = document.getElementById('lastUpdated');
        if (lastUpdatedEl) {
            const now = new Date();
            lastUpdatedEl.textContent = now.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }
    }

    loadGameData() {
        // Simulate loading data from an API
        this.updateGameDetails();
        this.updateMetrics();
        
        // Add loading states
        setTimeout(() => {
            document.querySelectorAll('.loading').forEach(el => {
                el.classList.remove('loading');
            });
        }, 1000);
    }
}

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.gameReportDashboard = new GameReportDashboard();
});

// Handle window resize for chart responsiveness
window.addEventListener('resize', () => {
    if (window.gameReportDashboard) {
        Object.values(window.gameReportDashboard.charts).forEach(chart => {
            if (chart && typeof chart.resize === 'function') {
                chart.resize();
            }
        });
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!window.gameReportDashboard) return;
    
    // Navigate games with arrow keys when focused on tabs
    if (e.target.classList.contains('game-tab')) {
        const tabs = Array.from(document.querySelectorAll('.game-tab'));
        const currentIndex = tabs.indexOf(e.target);
        
        let newIndex;
        if (e.key === 'ArrowLeft') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        } else if (e.key === 'ArrowRight') {
            newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        }
        
        if (newIndex !== undefined) {
            e.preventDefault();
            tabs[newIndex].focus();
            tabs[newIndex].click();
        }
    }
    
    // Toggle dark mode with Ctrl+D
    if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        window.gameReportDashboard.toggleDarkMode();
    }
});

// Export functionality for external use
window.GameReportAPI = {
    switchGame: (gameId) => {
        if (window.gameReportDashboard) {
            window.gameReportDashboard.switchGame(gameId);
        }
    },
    
    toggleDarkMode: () => {
        if (window.gameReportDashboard) {
            window.gameReportDashboard.toggleDarkMode();
        }
    },
    
    exportReport: () => {
        if (window.gameReportDashboard) {
            window.gameReportDashboard.exportReport();
        }
    },
    
    getCurrentGame: () => {
        return window.gameReportDashboard?.currentGame || 'fortnite';
    }
};