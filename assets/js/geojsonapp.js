//var config = {
//  geojson: "https://geodev.lorrnel.com:8084/geoserver/sdv_test_dev/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sdv_test_dev%3Abas_grd_ab_ats_ascm&maxFeatures=100&outputFormat=application%2Fjson",
//  title: "ATS",
//  layerName: "ATS",
//  hoverProperty: "ascm_num",
//  sortProperty: "name",
//  sortOrder: "asc"
//};
//
//var properties = [{
//  value: "objectid",
//  label: "objectid",
//  table: {
//    visible: false,
//    sortable: true
//  },
//  filter: {
//    type: "integer"
//  },
//  info: false
//},
//{
//  value: "ascm_num",
//  label: "ascm_num",
//  table: {
//    visible: true,
//    sortable: true
//  },
//  filter: {
//    type: "integer",
//    input: "checkbox",
//    vertical: true,
//    multiple: true,
//    operators: ["in", "not_in", "equal", "not_equal"],
//    values: []
//  }
//},{
//  value: "tablet_mk",
//  label: "tablet_mk",
//  table: {
//    visible: true,
//    sortable: true
//  },
//  filter: {
//    type: "string",
//    input: "checkbox",
//    vertical: true,
//    multiple: true,
//    operators: ["in", "not_in", "equal", "not_equal"],
//    values: []
//  }
//},
//{
//  value: "condition",
//  label: "condition",
//  table: {
//    visible: true,
//    sortable: true
//  },
//  filter: {
//    type: "string",
//    input: "checkbox",
//    vertical: true,
//    multiple: true,
//    operators: ["in", "not_in", "equal", "not_equal"],
//    values: []
//  }
//},
//{
//  value: "card_type",
//  label: "card_type",
//  table: {
//    visible: true,
//    sortable: true
//  },
//  filter: {
//    type: "string",
//    input: "checkbox",
//    vertical: true,
//    multiple: true,
//    operators: ["in", "not_in", "equal", "not_equal"],
//    values: []
//  }
//},
//{
//  value: "elevation",
//  label: "elevation",
//  table: {
//    visible: true,
//    sortable: true
//  },
//  filter: {
//    type: "double",
//    input: "checkbox",
//    vertical: true,
//    multiple: true,
//    operators: ["in", "not_in", "equal", "not_equal"],
//    values: []
//  }
//},
//{
//  value: "utm_mer",
//  label: "utm_mer",
//  table: {
//    visible: true,
//    sortable: true
//  },
//  filter: {
//    type: "integer",
//    input: "checkbox",
//    vertical: true,
//    multiple: true,
//    operators: ["in", "not_in", "equal", "not_equal"],
//    values: []
//  }
//},
//{
//  value: "utm_cf",
//  label: "utm_cf",
//  table: {
//    visible: true,
//    sortable: true
//  },
//  filter: {
//    type: "double",
//    input: "checkbox",
//    vertical: true,
//    multiple: true,
//    operators: ["in", "not_in", "equal", "not_equal"],
//    values: []
//  }
//},
//{
//  value: "utm_north",
//  label: "utm_north",
//  table: {
//    visible: true,
//    sortable: true
//  },
//  filter: {
//    type: "double",
//    input: "checkbox",
//    vertical: true,
//    multiple: true,
//    operators: ["in", "not_in", "equal", "not_equal"],
//    values: []
//  }
//},
//{
//  value: "utm_east",
//  label: "utm_east",
//  table: {
//    visible: true,
//    sortable: true
//  },
//  filter: {
//    type: "double",
//    input: "checkbox",
//    vertical: true,
//    multiple: true,
//    operators: ["in", "not_in", "equal", "not_equal"],
//    values: []
//  }
//},
//{
//  value: "lat_dd",
//  label: "lat_dd",
//  table: {
//    visible: true,
//    sortable: true
//  },
//  filter: {
//    type: "double",
//    input: "checkbox",
//    vertical: true,
//    multiple: true,
//    operators: ["in", "not_in", "equal", "not_equal"],
//    values: []
//  }
//},
//{
//  value: "long_dd",
//  label: "long_dd",
//  table: {
//    visible: true,
//    sortable: true
//  },
//  filter: {
//    type: "double",
//    input: "checkbox",
//    vertical: true,
//    multiple: true,
//    operators: ["in", "not_in", "equal", "not_equal"],
//    values: []
//  }
//}];

var config = {
  geojson: "https://geoserver.lorrnel.com:8084/geoserver/alpac/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=alpac%3Av_asmt_did_weed&outputFormat=application%2Fjson",
  title: "Weed Infestation",
  layerName: "Weed Infestation",
  sortProperty: "disp_num",
  sortOrder: "asc"
};

var properties = [{
  value: "id",
  label: "id",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "integer"
  },
  info: false
},
{
  value: "disp_num",
  label: "Disposition Number",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},{
  value: "Disosition_Type",
  label: "Disposition Type",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "DID_Status",
  label: "Status",
  table: {
    visible: false,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "Letter_Of_Authority_Date",
  label: "Letter Of Authority Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "Effective_Date",
  label: "Effective Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "Expiration_Date",
  label: "Expiration Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "Renewal_Date",
  label: "Renewal Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "Source_Document",
  label: "Source Document",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "Plan_Number",
  label: "Plan",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "Purpose",
  label: "Purpose",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "Purpose_Description",
  label: "Purpose Description",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},             
{
  value: "Record_Count",
  label: "Weed Record Count",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},

{
  value: "Infestation_Levels",
  label: "Infestation Levels",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},

{
  value: "Maximum_Infestation",
  label: "Maximum Infestation",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},             
{
  value: "Report_URL",
  label: "Report",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "Image_URL",
  label: "Image",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
}           
];

$(function() {
  $(".title").html(config.title);
  $("#layer-name").html(config.layerName);
});

function buildConfig() {
  filters = [];
  table = [{
    field: "action",
    title: "<i class='fa fa-gear'></i>&nbsp;Action",
    align: "center",
    valign: "middle",
    width: "75px",
    cardVisible: false,
    switchable: false,
    formatter: function(value, row, index) {
      return [
        '<a class="zoom" href="javascript:void(0)" title="Zoom" style="margin-right: 10px;">',
          '<i class="fa fa-search-plus"></i>',
        '</a>',
        '<a class="identify" href="javascript:void(0)" title="Identify">',
          '<i class="fa fa-info-circle"></i>',
        '</a>'
      ].join("");
    },
    events: {
      "click .zoom": function (e, value, row, index) {
        map.fitBounds(featureLayer.getLayer(row.leaflet_stamp).getBounds());
        highlightLayer.clearLayers();
        highlightLayer.addData(featureLayer.getLayer(row.leaflet_stamp).toGeoJSON());
      },
      "click .identify": function (e, value, row, index) {
        identifyFeature(row.leaflet_stamp);
        highlightLayer.clearLayers();
        highlightLayer.addData(featureLayer.getLayer(row.leaflet_stamp).toGeoJSON());
      }
    }
  }];



  $.each(properties, function(index, value) {
    // Filter config
    if (value.filter) {
      var id;
      if (value.filter.type == "integer") {
        id = "cast(properties->"+ value.value +" as int)";
      }
      else if (value.filter.type == "double") {
        id = "cast(properties->"+ value.value +" as double)";
      }
      else {
        id = "properties->" + value.value;
      }
      filters.push({
        id: id,
        label: value.label
      });
      $.each(value.filter, function(key, val) {
        if (filters[index]) {
          // If values array is empty, fetch all distinct values
          if (key == "values" && val.length === 0) {
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [geojson.features], function(results){
              distinctValues = [];
              $.each(results, function(index, value) {
                distinctValues.push(value.field);
              });
            });
            filters[index].values = distinctValues;
          } else {
            filters[index][key] = val;
          }
        }
      });
    }
    // Table config
    if (value.table) {
      table.push({
        field: value.value,
        title: value.label,
        formatter: urlFormatter
      });
      $.each(value.table, function(key, val) {
        if (table[index+1]) {
          table[index+1][key] = val;
        }
      });
    }
  });

  buildFilters();
  buildTable();
}

// Basemap Layers
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 20, maxNativeZoom:19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});

function subteStyleWeed1(feature) {
  var colorToUse;
  var curF = feature.properties.Maximum_Infestation;

  if (curF === "High") colorToUse = "#ff1a1a";
  else if (curF === "Moderate") colorToUse = "#ffa31a";
  else if (curF === "Low") colorToUse = "#8cff1a";
  else colorToUse = "#d9d9d9";

  return {
    "color": colorToUse,
    "weight": 1,
    "opacity": 1,
    "fillColor": colorToUse,
    "fillOpacity": 0.7

  };
}

var highlightLayer = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, {
      radius: 5,
      color: "#FFF",
      weight: 2,
      opacity: 1,
      fillColor: "#00FFFF",
      fillOpacity: 1,
      clickable: false
    });
  },
  style: function (feature) {
    return {
      color: "#00FFFF",
      weight: 2,
      opacity: 1,
      fillColor: "#00FFFF",
      fillOpacity: 0.5,
      clickable: false
    };
  }
});

var featureLayer = L.geoJson(null, {
  filter: function(feature, layer) {
    return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
  },
  style: subteStyleWeed1,
  pointToLayer: function (feature, latlng) {
    if (feature.properties && feature.properties["marker-color"]) {
      markerColor = feature.properties["marker-color"];
    } else {
      markerColor = "#FF0000";
    }
    return L.circleMarker(latlng, {
      radius: 4,
      weight: 2,
      fillColor: markerColor,
      color: markerColor,
      opacity: 1,
      fillOpacity: 1
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.on({
        click: function (e) {
          identifyFeature(L.stamp(layer));
          highlightLayer.clearLayers();
          highlightLayer.addData(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (config.hoverProperty) {
            $(".info-control").html(feature.properties[config.hoverProperty]);
            $(".info-control").show();
          }
        },
        mouseout: function (e) {
          $(".info-control").hide();
        }
      });
    }
  }
});

// Fetch the GeoJSON file
$.getJSON(config.geojson, function (data) {
  geojson = data;
  features = $.map(geojson.features, function(feature) {
    return feature.properties;
  });
  featureLayer.addData(data);
  buildConfig();
  $("#loading-mask").hide();
});

var map = L.map("map", {
  layers: [OpenStreetMap_Mapnik, featureLayer, highlightLayer]
}).fitWorld();

// ESRI geocoder
var searchControl = L.esri.Geocoding.Controls.geosearch({
  useMapBounds: 17
}).addTo(map);

// Info control
var info = L.control({
  position: "bottomleft"
});

// Custom info hover control
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info-control");
  this.update();
  return this._div;
};
info.update = function (props) {
  this._div.innerHTML = "";
};
info.addTo(map);
$(".info-control").hide();

// Larger screens get expanded layer control
if (document.body.clientWidth <= 767) {
  isCollapsed = true;
} else {
  isCollapsed = false;
}
var baseLayers = {
  "Street Map": OpenStreetMap_Mapnik};
var overlayLayers = {
  "<span id='layer-name'>GeoJSON Layer</span>": featureLayer
};
var layerControl = L.control.layers(baseLayers, overlayLayers, {
  collapsed: isCollapsed
}).addTo(map);

// Filter table to only show features in current map bounds
map.on("moveend", function (e) {
  syncTable();
});

map.on("click", function(e) {
  highlightLayer.clearLayers();
});

// Table formatter to make links clickable
function urlFormatter (value, row, index) {
  if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
    return "<a href='"+value+"' target='_blank'>"+value+"</a>";
  }
  else {return value;}
}

function buildFilters() {
  $("#query-builder").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function applyFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#query-builder").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [geojson.features], function(features){
		featureLayer.clearLayers();
		featureLayer.addData(features);
		syncTable();
	});
}

function buildTable() {
  $("#table").bootstrapTable({
    cache: false,
    height: $("#table-container").height(),
    undefinedText: "",
    striped: false,
    pagination: false,
    minimumCountColumns: 1,
    sortName: config.sortProperty,
    sortOrder: config.sortOrder,
    toolbar: "#toolbar",
    search: true,
    trimOnSearch: false,
    showColumns: true,
    showToggle: true,
    columns: table,
    onClickRow: function (row) {
      // do something!
    },
    onDblClickRow: function (row) {
      // do something!
    }
  });

  map.fitBounds(featureLayer.getBounds());

  $(window).resize(function () {
    $("#table").bootstrapTable("resetView", {
      height: $("#table-container").height()
    });
  });
}

function syncTable() {
  tableFeatures = [];
  featureLayer.eachLayer(function (layer) {
    layer.feature.properties.leaflet_stamp = L.stamp(layer);
    if (map.hasLayer(featureLayer)) {
      if (map.getBounds().contains(layer.getBounds())) {
        tableFeatures.push(layer.feature.properties);
      }
    }
  });
  $("#table").bootstrapTable("load", JSON.parse(JSON.stringify(tableFeatures)));
  var featureCount = $("#table").bootstrapTable("getData").length;
  if (featureCount == 1) {
    $("#feature-count").html($("#table").bootstrapTable("getData").length + " visible feature");
  } else {
    $("#feature-count").html($("#table").bootstrapTable("getData").length + " visible features");
  }
}

function identifyFeature(id) {
  var featureProperties = featureLayer.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
      value = "<a href='" + value + "' target='_blank'>" + value + "</a>";
    }
    $.each(properties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#feature-info").html(content);
  $("#featureModal").modal("show");
}

function switchView(view) {
  if (view == "split") {
    $("#view").html("Split View");
    location.hash = "#split";
    $("#table-container").show();
    $("#table-container").css("height", "30%");
    $("#map-container").show();
    $("#map-container").css("height", "70%");
    $(window).resize();
    if (map) {
      map.invalidateSize();
    }
  } else if (view == "map") {
    $("#view").html("Map View");
    location.hash = "#map";
    $("#map-container").show();
    $("#map-container").css("height", "100%");
    $("#table-container").hide();
    if (map) {
      map.invalidateSize();
    }
  } else if (view == "table") {
    $("#view").html("Table View");
    location.hash = "#table";
    $("#table-container").show();
    $("#table-container").css("height", "100%");
    $("#map-container").hide();
    $(window).resize();
  }
}

$("[name='view']").click(function() {
  $(".in,.open").removeClass("in open");
  if (this.id === "map-graph") {
    switchView("split");
    return false;
  } else if (this.id === "map-only") {
    switchView("map");
    return false;
  } else if (this.id === "graph-only") {
    switchView("table");
    return false;
  }
});

$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#filter-btn").click(function() {
  $("#filterModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#chart-btn").click(function() {
  $("#chartModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#view-sql-btn").click(function() {
  alert($("#query-builder").queryBuilder("getSQL", false, false).sql);
});

$("#apply-filter-btn").click(function() {
  applyFilter();
});

$("#reset-filter-btn").click(function() {
  $("#query-builder").queryBuilder("reset");
  applyFilter();
});

$("#extent-btn").click(function() {
  map.fitBounds(featureLayer.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#download-csv-btn").click(function() {
  $("#table").tableExport({
    type: "csv",
    ignoreColumn: [0],
    fileName: "data"
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#download-excel-btn").click(function() {
  $("#table").tableExport({
    type: "excel",
    ignoreColumn: [0],
    fileName: "data"
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#download-pdf-btn").click(function() {
  $("#table").tableExport({
    type: "pdf",
    ignoreColumn: [0],
    fileName: "data",
    jspdf: {
      format: "bestfit",
      margins: {
        left: 20,
        right: 10,
        top: 20,
        bottom: 20
      },
      autotable: {
        extendWidth: false,
        overflow: "linebreak"
      }
    }
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});