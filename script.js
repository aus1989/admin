const sidebarOpen = false;
const sideBar = document.getElementById("sidebar");

function openSidebar(){
  sideBar.classList.toggle("sidebar-active");
}


// ======= CHARTS===========

const barChartOptions = {
  series: [{
    data: [6, 8, 10, 4, 2]
  }],
  chart: {
    type: 'bar',
    height: 200,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '50%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

const barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// ============ AREA CHART==========

const areaChartOptions = {
  series: [{
    name: 'Purchase Orders',
    data: [31, 40, 28, 51, 42, 100, 96, 80, 35, 77, 60, 56]
  }, {
    name: 'Sales Orders',
    data: [11, 32, 45, 32, 36, 52, 40, 28, 35, 42, 38, 24]
  }],
  chart: {
    height: 200,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

const areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();









