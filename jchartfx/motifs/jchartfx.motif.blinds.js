(function(){function n(c){var a="{B ST}";null!=c&&(a=c.toString());return c='<C><P D="{B G}"><P.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></P.F></P><P D="{B G}" UI="1"><P.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="blindsStrokeThickness"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></P.F></P></C>'.replace("blindsStrokeThickness",
a)}function l(c,a,b){return'<T><T.R><D K="cfxOSW">1</D></T.R><V VW="'+a+'" VH="'+b+'"><C><P D="'+c+'"><P.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></P.F></P><P UI="1" D="'+
c+'"><P.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></P.F></P></C></V></T>'}var a,f;"undefined"!==typeof window?(a=window.sfx,f=window.cfx):(a=require("./jchartfx.system.js"),f=a.cfx);f.motif="blinds";var m="<T>"+n()+"</T>",e=a["gauge.templates"];void 0!=e&&(e.blindsDashBorder='<T><T.R><s K="plotMargin">targetChart</s><sc K="titleConverter"></sc></T.R><B F="{B F}" S="{B S}" M="2"><g M="1"><g.RD><RD H="6"/><RD H="Auto"/><RD H="Auto"/><RD H="*"/></g.RD><B g.R="1" H="4" V="{B ShowCaption}"/><B g.R="2" M="8,0" MinHeight="32" V="{B ShowCaption}"><TextBlock Text="{B Title, Converter={S titleConverter},ConverterParameter=%u}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="{Binding Class=DashboardTitle.font-size}" FontWeight="Bold"/></B><C g.R="3" N="targetChart" M="4,4,4,9"/></g></B></T>',
e.blindsRadialDashBorder="<T/>",e.blindsRadialIndicator="NeedleRegularDrop",e.blindsRadialSection=m,e.blindsRadialCap='<T><T.R><s K="ratio">1</s><cc K="clrConverter"/></T.R><C><E><E.F><SolidBrush C="{B FillColor, Converter={S clrConverter},ConverterParameter=#*0.7}"/></E.F></E><E M="2"><E.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></E.F></E></C></T>',e.blindsRadialGlare="<T/>",e.blindsLinearDashBorder=
"<T/>",e.blindsLinearGlare="<T/>",e.blindsLinearFiller="LinearFillerSimple",e.blindsLinearMarker='<T><T.R><s K="ratio">0.2</s><s K="cfxDefGap">0</s></T.R><C ><B UI="1"><B.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></B.F></B><B UI="1"><B.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></B.F></B></C></T>',
e.blindsLinearBar='<T><B F="{B F}" S="{B S}"/></T>',e.blindsFillerVertical='<T><T.R><s K="ratio">0.2</s><s K="cfxDefGap">0</s></T.R><C ><B UI="1"><B.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></B.F></B><B UI="1"><B.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></B.F></B></C></T>',
e.blindsFillerHorizontal='<T><T.R><s K="ratio">0.2</s><s K="cfxDefGap">0</s></T.R><C ><B UI="1"><B.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></B.F></B><B UI="1"><B.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></B.F></B></C></T>',
e.blindsFillerRadial=m,e.blindsLinearSection='<T><T.R><s K="ratio">0.2</s><s K="cfxDefGap">0</s></T.R><C ><B UI="1"><B.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></B.F></B><B UI="1"><B.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></B.F></B></C></T>',
e.blindsRepeaterRadial='<T><T.R><s K="ratio">0.2</s><s K="cfxDefGap">0</s></T.R><C ><B UI="1"><B.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></B.F></B><B UI="1"><B.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></B.F></B></C></T>',
e.blindsRepeaterVertical='<T><T.R><s K="ratio">0.2</s><s K="cfxDefGap">0</s></T.R><C ><B UI="1"><B.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></B.F></B><B UI="1"><B.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></B.F></B></C></T>',
e.blindsRepeaterHorizontal='<T><T.R><s K="ratio">0.2</s><s K="cfxDefGap">0</s></T.R><C ><B UI="1"><B.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></B.F></B><B UI="1"><B.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></B.F></B></C></T>',
e.blindsMarkerVertical='<T><T.R><s K="ratio">0.5</s></T.R><V VW="25" VH="40"><C><P D="M15.014,1.75c-1.382-2.354-3.646-2.322-5.027,0.032L0,15v16c0,2.762,2.239,5,5,5h15c2.762,0,5-2.238,5-5V15L15.014,1.75z"><P.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></P.F></P><P UI="1" D="M15.014,1.75c-1.382-2.354-3.646-2.322-5.027,0.032L0,15v16c0,2.762,2.239,5,5,5h15c2.762,0,5-2.238,5-5V15L15.014,1.75z"><P.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="{B ST}"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></P.F></P></C></V></T>',
e.blindsMarkerHorizontal='<T><T.R><s K="ratio">0.5</s></T.R><V VW="25" VH="40"><C><P D="M25,21.001v-16c0-2.762-2.238-5-5-5H5c-2.762,0-5,2.238-5,5v16l9.986,13.218c1.382,2.354,3.646,2.386,5.027,0.032L25,21.001z"><P.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></P.F></P><P UI="1" D="M25,21.001v-16c0-2.762-2.238-5-5-5H5c-2.762,0-5,2.238-5,5v16l9.986,13.218c1.382,2.354,3.646,2.386,5.027,0.032L25,21.001z"><P.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="{B ST}"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></P.F></P></C></V></T>',
e.blindsTrendIndicator='<T xmlns:x="a" xmlns:sys="b"><T.R><cc K="clrConverter"/><T K="fillTemplate">'+n(1)+'</T><T K="backTemplate">'+n(1)+'</T></T.R><P D="{B G}" S="{B S}" ST="{B ST}"/></T>',e.TipBorderDefault='<T xmlns:x="a"><T.R><mc K="multConverter"/><sc K="titleConverter"/><Th K="padding">8</Th></T.R><C Padding="{B Padding}"><B M="2,2,1,1" S="#80000000" ST="2" C.Left="3" C.Top="3" F="#80000000"><B.BE><BBE R="3"/></B.BE></B><B S="{B S}" ST="1" Padding="10,8,10,4" F="{B F}"><DockPanel N="container" Orientation="Vertical"><TextBlock Text="{B Title, Converter={S titleConverter},ConverterParameter=%u}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=1.2}" V="{B TitleVisible}" HorizontalAlignment="Center" FontWeight="Bold" M="0,0,0,4"/></DockPanel></B></C></T>',
e.blindsPictoGraph='<T><T.R><s K="ratio">0.78571</s><s K="vertSpacingHive">-0.6</s><s K="horzSpacingHive">0.4</s></T.R><V VW="33" VH="42"><g><P S="{B S}" ST="0.25" Reuse="true" D="M23.5,7.625c0,2.648-1.859,4.896-4.438,5.693c-0.648,0.199-1.341,0.307-2.062,0.307c-3.59,0-6.5-2.687-6.5-6s2.91-6,6.5-6S23.5,4.312,23.5,7.625z M32.17,29.062c-0.352-3.68-1.547-7.397-1.547-7.397c-1.843-4.817-6.205-7.04-13.623-7.04s-11.779,2.223-13.623,7.04c0,0-1.196,3.718-1.547,7.397c-0.439,4.591-0.313,7.611-0.313,7.611c0.073,1.423,0.898,1.974,1.985,1.974c1.378,0,2.019-0.812,2.129-1.949c0,0,0.002-3.511,0.629-7.261c0.107-0.646,0.48-2.271,1.379-2.25c0.46,0.011,0.334,0.688,0.334,0.688C7.91,31.438,7.252,34.344,7.221,39.09c-0.009,1.357,4.37,2.518,9.779,2.535c5.409-0.018,9.788-1.178,9.779-2.535c-0.031-4.746-0.689-7.652-0.752-11.215c0,0-0.125-0.677,0.334-0.688c0.898-0.021,1.271,1.604,1.379,2.25c0.627,3.75,0.629,7.261,0.629,7.261c0.11,1.138,0.751,1.949,2.129,1.949c1.086,0,1.912-0.551,1.985-1.974C32.483,36.674,32.609,33.653,32.17,29.062z" ><P.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></P.F></P><P UI="1" S="{B S}" Reuse="true" D="M23.5,7.625c0,2.648-1.859,4.896-4.438,5.693c-0.648,0.199-1.341,0.307-2.062,0.307c-3.59,0-6.5-2.687-6.5-6s2.91-6,6.5-6S23.5,4.312,23.5,7.625z M32.17,29.062c-0.352-3.68-1.547-7.397-1.547-7.397c-1.843-4.817-6.205-7.04-13.623-7.04s-11.779,2.223-13.623,7.04c0,0-1.196,3.718-1.547,7.397c-0.439,4.591-0.313,7.611-0.313,7.611c0.073,1.423,0.898,1.974,1.985,1.974c1.378,0,2.019-0.812,2.129-1.949c0,0,0.002-3.511,0.629-7.261c0.107-0.646,0.48-2.271,1.379-2.25c0.46,0.011,0.334,0.688,0.334,0.688C7.91,31.438,7.252,34.344,7.221,39.09c-0.009,1.357,4.37,2.518,9.779,2.535c5.409-0.018,9.788-1.178,9.779-2.535c-0.031-4.746-0.689-7.652-0.752-11.215c0,0-0.125-0.677,0.334-0.688c0.898-0.021,1.271,1.604,1.379,2.25c0.627,3.75,0.629,7.261,0.629,7.261c0.11,1.138,0.751,1.949,2.129,1.949c1.086,0,1.912-0.551,1.985-1.974C32.483,36.674,32.609,33.653,32.17,29.062z" ><P.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="{B ST}"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></P.F></P></g></V></T>',
m=new f.gauge.Palette,m.setColors(["#D9D9D9","#FFFFFF","#D9D9D9","#FFFFFF","#F47528","#B7581E","#F47528","#B7581E","#E9E9E9","#E9E9E9","#595959","#E9E9E9",null,null,"#ED3B6B","#B22D51",null,"#FDD25F","#BE9E48",null,"#A8D350","#7E9F3C",null,"#BBBBBB","#BBBBBB","#48494D","#48494D","#808080","#8A8B8F","#ED3B6B","#FDD25F","#A8D350","#575757","#ffffff","#767676","#823B16","#D9D9D9","#999999","#A8D350","#FDD25F","#F47528","#ED3B6B","#4EC2C2","#7E9F3C","#BE9E48","#B7581E","#B22D51","#3B9292"]),f.gauge.Palette.setDefaultPalette(m));
a=a["vector.templates"];void 0!=a&&(a["DashboardTitle.fill"]="0,#7F7F7F",a["DashboardTitle.font-family"]="1,Calibri",a["DashboardTitle.font-size"]="2,14pt",a["AxisY_Text.fill"]="0,#595959",a["Border.fill"]="0,#FFFFFF",a.blindsBorder='<T><T.R><sc K="titleConverter"></sc><s K="plotMargin">targetChart</s><Th K="externalMargin">16</Th><Th K="internalRectMargin">0</Th><Th K="uiMargin">18,18,0,0</Th><mc K="multConverter"/><T K="internalRect"><B CR="6" F="{B F}" S="{B S}" CP="0.5"/></T><T K="internal"><Line S="{B S}" X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}"/></T></T.R><B F="{B F}" S="{B S}" M="2"><g M="1"><g.RD><RD H="11"/><RD H="Auto"/><RD H="4"/><RD H="*"/></g.RD><B g.R="3" F="{B F}" S="{N}"><C N="targetChart" M="20,0,0,0"/></B><g g.R="1"><g.CD><CD W="Auto"/><CD W="*"/></g.CD><B g.C="1" M="8,0" V="{B ShowCaption}" MinHeight="32"><TextBlock Text="{B Title, Converter={S titleConverter},ConverterParameter=%u}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="{Binding Class=DashboardTitle.font-size}" FontWeight="Bold" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}"/></B><r g.C="0" V="{B UIVisible}" W="{B UITitle, Converter={S multConverter},ConverterParameter=44}" H="1" F="{N}" S="{N}"/></g></g></B></T>',
a.blindsBar='<T><T.R><s K="ratio">0.2</s><s K="cfxDefGap">0</s></T.R><C ><B UI="1"><B.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></B.F></B><B UI="1"><B.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></B.F></B></C></T>',
a.blindsGantt=a.blindsBar,a.blindsArea='<T><T.R><D K="cfxDefStrokeThickness">1</D></T.R><C><Po P="{B P}"><Po.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></Po.F></Po><Po UI="1" P="{B P}"><Po.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></Po.F></Po></C></T>',
a.blindsHighLow='<T><T.R><D K="cfxDefStrokeThickness">3</D><T K="lineTemplate"></T></T.R><C><Po P="{B P}"><Po.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></Po.F></Po><Po UI="1" P="{B P}"><Po.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></Po.F></Po></C></T>',
a.blindsHighLowBaseline='<T><T.R><D K="cfxDefStrokeThickness">3</D><T K="baselineTemplate"></T><T K="lineTemplate"></T></T.R><C><Po P="{B P}"><Po.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></Po.F></Po><Po UI="1" P="{B P}"><Po.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></Po.F></Po></C></T>',
a.blindsLine='<T><T.R><D K="cfxDefStrokeThickness">2</D><mc K="multConverter"/></T.R><Pl P="{B P}" ST="{B ST}" StrokeDashArray="{B StrokeDashArray}"><Pl.S><SolidBrush C="{B FC}"/></Pl.S></Pl></T>',a.blindsCurve='<T><P D="{B G}" ST="{B ST}" StrokeDashArray="{B StrokeDashArray}" O="true"><P.S><SolidBrush C="{B FC}"/></P.S></P></T>',a.blindsPie='<T><C><P D="{B G}"><P.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></P.F></P><P UI="1" D="{B G}"><P.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></P.F></P></C></T>',
a.blindsDoughnut=a.blindsPie,a.blindsRose=a.blindsPie,a.blindsBubble='<T><C><E><E.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></E.F></E><E UI="1"><E.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></E.F></E></C></T>',
a.blindsCurveArea=a.blindsPie,a.blindsTreeMap=a.blindsBar,a.blindsDensity=a.blindsBar,a.blindsFunnel=a.blindsArea,a.blindsPyramid=a.blindsFunnel,a.blindsSparklineLine=a.blindsLine,a.blindsSparklineBar=a.blindsBar,a.blindsSparklineArea=a.blindsArea,a.blindsEqualizer=a.blindsBar,a.blindsHeatMap=a.blindsBar,a.blindsOverlayBubble=a.blindsBubble,a.blindsBullet='<T><T.R><T K="templateLine"><C><B UI="1" C.Left="{B X1}" C.Top="{B Y1}" W="3" H="{B H}" CP="1" ><B.F><SolidBrush C="{B FC}"/></B.F></B></C></T></T.R><C ><B><B.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></B.F></B><B UI="1"><B.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="1"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></B.F></B></C></T>',
a.TipBorderDefault='<T xmlns:x="a"><T.R><mc K="multConverter"/><sc K="titleConverter"/><Th K="padding">8</Th></T.R><C Padding="{B Padding}"><B M="2,2,1,1" S="#80000000" ST="2" C.Left="3" C.Top="3" F="#80000000"><B.BE><BBE R="3"/></B.BE></B><B S="{B S}" ST="1" Padding="10,8,10,4" F="{B F}"><DockPanel N="container" Orientation="Vertical"><TextBlock Text="{B Title, Converter={S titleConverter},ConverterParameter=%u}}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=1.2}" V="{B TitleVisible}" HorizontalAlignment="Center" FontWeight="Bold" M="0,0,0,4"/></DockPanel></B></C></T>',
a.blindsPictoGraph='<T><T.R><s K="ratio">0.78571</s><s K="vertSpacingHive">-0.6</s><s K="horzSpacingHive">0.4</s></T.R><V VW="33" VH="42"><g><P S="{B S}" ST="0.25" Reuse="true" D="M23.5,7.625c0,2.648-1.859,4.896-4.438,5.693c-0.648,0.199-1.341,0.307-2.062,0.307c-3.59,0-6.5-2.687-6.5-6s2.91-6,6.5-6S23.5,4.312,23.5,7.625z M32.17,29.062c-0.352-3.68-1.547-7.397-1.547-7.397c-1.843-4.817-6.205-7.04-13.623-7.04s-11.779,2.223-13.623,7.04c0,0-1.196,3.718-1.547,7.397c-0.439,4.591-0.313,7.611-0.313,7.611c0.073,1.423,0.898,1.974,1.985,1.974c1.378,0,2.019-0.812,2.129-1.949c0,0,0.002-3.511,0.629-7.261c0.107-0.646,0.48-2.271,1.379-2.25c0.46,0.011,0.334,0.688,0.334,0.688C7.91,31.438,7.252,34.344,7.221,39.09c-0.009,1.357,4.37,2.518,9.779,2.535c5.409-0.018,9.788-1.178,9.779-2.535c-0.031-4.746-0.689-7.652-0.752-11.215c0,0-0.125-0.677,0.334-0.688c0.898-0.021,1.271,1.604,1.379,2.25c0.627,3.75,0.629,7.261,0.629,7.261c0.11,1.138,0.751,1.949,2.129,1.949c1.086,0,1.912-0.551,1.985-1.974C32.483,36.674,32.609,33.653,32.17,29.062z" ><P.F><L S="0,0" E="1,0"><G C="{B FC}" O="0" A="0.6"/><G C="{B FC}" O="0.07" A="0.53"/><G C="{B FC}" O="0.14" A="0.46"/><G C="{B FC}" O="0.21" A="0.39"/><G C="{B FC}" O="0.28" A="0.32"/><G C="{B FC}" O="0.35" A="0.25"/><G C="{B FC}" O="0.42" A="0.15"/><G C="{B FC}" O="0.58" A="0.15"/><G C="{B FC}" O="0.65" A="0.25"/><G C="{B FC}" O="0.72" A="0.32"/><G C="{B FC}" O="0.79" A="0.39"/><G C="{B FC}" O="0.86" A="0.46"/><G C="{B FC}" O="0.93" A="0.53"/><G C="{B FC}" O="1" A="0.6"/></L></P.F></P><P UI="1" S="{B S}" Reuse="true" D="M23.5,7.625c0,2.648-1.859,4.896-4.438,5.693c-0.648,0.199-1.341,0.307-2.062,0.307c-3.59,0-6.5-2.687-6.5-6s2.91-6,6.5-6S23.5,4.312,23.5,7.625z M32.17,29.062c-0.352-3.68-1.547-7.397-1.547-7.397c-1.843-4.817-6.205-7.04-13.623-7.04s-11.779,2.223-13.623,7.04c0,0-1.196,3.718-1.547,7.397c-0.439,4.591-0.313,7.611-0.313,7.611c0.073,1.423,0.898,1.974,1.985,1.974c1.378,0,2.019-0.812,2.129-1.949c0,0,0.002-3.511,0.629-7.261c0.107-0.646,0.48-2.271,1.379-2.25c0.46,0.011,0.334,0.688,0.334,0.688C7.91,31.438,7.252,34.344,7.221,39.09c-0.009,1.357,4.37,2.518,9.779,2.535c5.409-0.018,9.788-1.178,9.779-2.535c-0.031-4.746-0.689-7.652-0.752-11.215c0,0-0.125-0.677,0.334-0.688c0.898-0.021,1.271,1.604,1.379,2.25c0.627,3.75,0.629,7.261,0.629,7.261c0.11,1.138,0.751,1.949,2.129,1.949c1.086,0,1.912-0.551,1.985-1.974C32.483,36.674,32.609,33.653,32.17,29.062z" ><P.F><DrawingBrush W="50" H="2" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="{B ST}"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></P.F></P></g></V></T>',
a.blindsMarker1=a.blindsBar,a.blindsMarker2=a.blindsBubble,a.blindsMarker3=l("M12,0L24,24L0,24Z",25,25),a.blindsMarker4=l("M24,12L12,24L0,12L12,0Z",25,25),a.blindsMarker5=a.blindsBubble,a.blindsMarker6=l("M24,10L0,10L0,14L24,14Z",25,25),a.blindsMarker7=l("M14,24L14,0L10,0L10,24Z",25,25),a.blindsMarker8=l("M24,10L14,10L14,0L10,0L10,10L0,10L0,14L10,14L10,24L14,24L14,14L24,14Z",25,25),a.blindsMarker9=l("M12,24L24,0L0,0L12,24",25,25),a.blindsMarker10=l("M0,0L2,0L12,10L22,0L24,0L24,2L14,12L24,22L24,24L22,24L12,14L2,24L0,24L0,22L10,12L0,2Z",
25,25),a=new f.Palette,a.setColors("#A8D350 #FDD25F #F47528 #ED3B6B #4EC2C2 #3399FE #909090 #FF4488 #FFBD21 #A9DFDF #FFA4C7 #54C1C6 #D04500 #F99803 #78C817 #1365D7 #3F4F1E #5F4F24 #5B2C0F #591628 #1D4949 #13395F #363636 #601933 #60470C #3F5454 #603D4B #1F484A #FF7300 #FFFD05 #C8FF26 #1FA8FF #FFFFFF #F0F0F0 #00000000 #D9D9D9 #D9D9D9 #F3F3F3 #5B9BD5 #C5E8E8 #595959 #404040 #00000000 #595959 #00000000 #595959 #00000000 #ffffff #595959 #F3F3F3 #595959 #FFFFFF #595959 #D9D9D9 #ffffff #575757 #ffffff #767676 #404040 #D9D9D9 #999999".split(" ")),
f.Chart.setDefaultPalette(a));var k=function(){};f.motifs.blinds=k;k.getStyleInfo=function(c){var a="";void 0!==c&&(c=c[0],void 0!==c&&(a=c[0]));c={isGroup:!1};c.name=a;c.isSingle=!1;c.isBullet=!1;c.sections=[];if(void 0!=a&&(a=a.toUpperCase(),0<=a.indexOf("SINGLE")&&(c.isSingle=!0,c.name=""),0<=a.indexOf("GROUP")&&(c.isGroup=!0,c.name="",c.name=""),0<=a.indexOf("BULLET")&&(c.isBullet=!0,c.name=""),0<=a.indexOf("SECTIONS"))){var b,d;b=a.indexOf("SECTIONS");d=a.indexOf(":",b);0<d&&(b=d,d=a.indexOf("-",
b),a=0<=d?a.substring(b+1,d):a.substring(b+1,a.length),c.sections=a.split(",",100));c.name=""}return c};k.global=function(c){c.setFont("9pt Calibri")};k.radial=function(c,a){k.global(c);var b=k.getStyleInfo(a);null!=b.name&&c.setStyle(b.name);var d=c.getMainScale(),g=c.getMainIndicator();g.setUseSectionColor(!0);if("progress"==b.name){d.setThickness(1.3);d.setPosition(-.1);var h=d.getBar();h.setVisible(!0);h.setTemplate(e.blindsRadialBar);h.setThickness(.25);d.setStartAngle(130);d.setSweepAngle(280);
d=new f.gauge.Filler;d.setTemplate(e.blindsFillerRadial);d.setPosition(.17);d.setSize(.21);c.setMainIndicator(d);d=c.getDefaultAttributes();d.setSectionPosition(.18);d.setSectionThickness(.05)}else d.setThickness(.5),d.setPosition(0),h=d.getBar(),h.setVisible(!1),h.setTemplate(e.blindsRadialBar),h.setThickness(.65),h.setPosition(0),d.getCap().setSize(.13),g.setSize(.8),g.setPosition(.75),g=d.getTickmarks(),h=g.getMajor(),h.setWidth(.01),h.setSize(.05),h.setPosition(.5),d.setAlignment(f.StringAlignment.Near),
h.setStyle(f.gauge.TickmarkStyle.None),g.getMedium().setVisible(!1),d=c.getDefaultAttributes(),d.setSectionPosition(.55),d.setSectionThickness(.5);c.getDefaultAttributes().setRepeaterSize(.4);c.getDefaultAttributes().setRepeaterPosition(.385);"repeater"==b.name&&(b=c.getMainScale(),b.getCap().setVisible(!1),b.getTickmarks().getMajor().setStyle(f.gauge.TickmarkStyle.None),b.getTickmarks().getMedium().setStyle(f.gauge.TickmarkStyle.None),h=b.getBar(),h.setVisible(!1),b=new f.gauge.Repeater,b.setPaintOff(!0),
c.setMainIndicator(b))};k.linear=function(c,a){k.global(c);var b=c.getMainScale(),d=b.getBar();d.setVisible(!1);b.setThickness(.75);b.setAlignment(f.StringAlignment.Near);var g=b.getTickmarks(),h=g.getMajor();h.setSize(.1);h.setStyle(f.gauge.TickmarkStyle.None);h.setWidth(.025);h.setPosition(.6);g.getMedium().setVisible(!1);d.setThickness(.5);d.setPosition(.25);g=c.getMainIndicator();g.setSize(.4);g.setPosition(.3);c.setFont("9pt Calibri");d.setTemplate(e.blindsLinearBarRound);b.setAllowHalves(!1);
c.getDefaultAttributes().setRepeaterPosition(.5);c.getDefaultAttributes().setMarkerSize(.5);d=k.getStyleInfo(a);d.isGroup&&(c.getBorder().setTemplate("<T/>"),c.getDashboardBorder().setTemplate("<T/>"));d.isBullet&&(b.setThickness(.9),b.setPosition(0),g.setSize(.25),g.setPosition(.375),g.setTitle("Current"),g=new f.gauge.Marker,g.setSize(.4),g.setPosition(.5),g.setTitle("Target"),g.setTemplate(e.blindsLinearMarker),b.getIndicators().add(g),c.getDefaultAttributes().setSectionThickness(.5),c.getDefaultAttributes().setSectionPosition(.25));
if(0<d.sections.length){for(var g=0,l,h=0;h<d.sections.length;h++)l=d.sections[h],b=new f.gauge.ScaleSection,b.setFrom(g),b.setTo(l),c.getMainScale().getSections().add(b),g=l;c.getMainScale().setMax(l)}};k.vert=function(c,a){k.linear(c,a);if("repeater"==k.getStyleInfo(a).name){var b=new f.gauge.Repeater;b.setPaintOff(!0);c.setMainIndicator(b)}};k.horz=function(a,e){k.linear(a,e);var b=k.getStyleInfo(e),b=k.getStyleInfo(e);b.isBullet||a.getMainScale().setThickness(.5);"repeater"==b.name&&(b=new f.gauge.Repeater,
b.setPaintOff(!0),a.setMainIndicator(b))};k.chart=function(a,e){var b="";if(void 0!==e){var d=e[0];void 0!==d&&(b=d[0])}a.getAllSeries().setMarkerVisible(!1);void 0!=b&&(b=b.toUpperCase(),"GROUP"==b&&a.getBorder().setTemplate("<T/>"));b=a.getAxisY().getGrids();b.getMajor().setTickMark(f.TickMark.None);b.getMajor().setVisible(!1);b.getMinor().setTickMark(f.TickMark.None);b=a.getAxisY2().getGrids();b.getMajor().setTickMark(f.TickMark.None);b.getMinor().setTickMark(f.TickMark.None);b.getMajor().setVisible(!1);
b=a.getAxisX().getGrids();b.getMinor().setTickMark(f.TickMark.None);b.getMajor().setTickMark(f.TickMark.None);b=a.getAllSeries();b.setMarkerStyle(f.MarkerStyle.Filled);b.getBorder().setUseForLines(!1);b.getPointLabels().setFont("10pt");b.getLine().setWidth(2);a.getPlotAreaMargin().setTop(25);a.setFont("9pt Calibri")};k.map=function(a,e){a.setShowAdditionalLayers(!1);a.setBackColor("#00FFFFFF");var b=new f.maps.MapLayer;b.setPath("@main");b.setTemplate('<T xmlns:x="a" xmlns:sys="b"><P D="{B G}" F="{B F}"/></T>');
a.getLayers().add(b);a.setContextDataTemplate('<T xmlns:x="a" xmlns:sys="b"><T.R><cc K="clrConverter"/><mc K="numConverter"/></T.R><C><P D="{B G}"><P.F><L S="0,0" E="1,0"><G C="#00FFFFFF" O="0"/><G C="#0AFFFFFF" O="0.07"/><G C="#14FFFFFF" O="0.14"  /><G C="#1EFFFFFF" O="0.21"/><G C="#28FFFFFF" O="0.28"  /><G C="#32FFFFFF" O="0.35"/><G C="#40FFFFFF" O="0.375"  /><G C="#50FFFFFF" O="0.42"  /><G C="#50FFFFFF" O="0.58"  /><G C="#40FFFFFF" O="0.615"  /><G C="#32FFFFFF" O="0.65"  /><G C="#28FFFFFF" O="0.72"  /><G C="#1EFFFFFF" O="0.79"  /><G C="#14FFFFFF" O="0.86"  /><G C="#0AFFFFFF" O="0.93"/><G C="#00FFFFFF" O="1"/></L></P.F></P><P D="{B G}" F="#FF0000" ><P.F><DrawingBrush W="50" H="{B StrokeThickness,Converter={S numConverter},ConverterParameter=:*;v;2}" F="{B F}"><Line X1="0" Y1="0" X2="50" Y2="0" ST="{B ST}" A="0.9"><Line.S><SolidBrush C="{B FC}"/></Line.S></Line></DrawingBrush></P.F></P></C></T>')};
k.heatmap=function(a,e){var b=a.getGradientStops();b.getItem(0).setColor("#A8D350");b.getItem(1).setColor("#FDD25F")};k.equalizer=function(a,e){var b=new f.equalizer.EqualizerItem;b.setColor("#FDD25F");b.setCount(2);a.getTopItems().add(b);b=new f.equalizer.EqualizerItem;b.setColor("#F47528");b.setCount(1);a.getTopItems().add(b);a.setOffColor("#33BBBBBB")};k.trend=function(a,e){a.getSecondaryValues().setAlphaForeground(1);a.getDelta().setVisible(!1);a.getSecondaryValues().setSeparatorWidth(0);var b=
a.getIndicator();b.setStyle(f.gauge.IndicatorStyle.ThickDiagonal);b.setPosition(f.gauge.IndicatorPosition.Primary);b.setRoundPen(!0);b="";if(void 0!==e){var d=e[0];void 0!==d&&(b=d[0])}void 0!=b&&(0<=b.toUpperCase().indexOf("SINGLE")&&(a.getDelta().setVisible(!1),a.getPercentChange().setVisible(!1),a.getIndicator().setVisible(!1)),0<=b.toUpperCase().indexOf("GROUP")&&a.getBorder().setTemplate("<T/>"))};k.border=function(a,e){};k.getInfo=function(){return{x:7,y:49,w:15,h:63}};void 0!==f.ToolTipAttributes&&
(f.ToolTipAttributes.prototype.setLineMode=function(){var a=new f.ToolTipLineAttributes;a.getLine().setStyle(0);a.setBorderTemplate('<T xmlns:x="a"><T.R><mc K="multConverter"/><sc K="titleConverter"/><Th K="padding">2</Th></T.R><C Padding="{B Padding}"><B C.Left="-1" C.Top="0" F="{Binding Class=Border.fill}" A="0.9" S="{N}"><DockPanel N="container" Orientation="Vertical" M="2,2,2,2"><TextBlock Text="{B Title, Converter={S titleConverter},ConverterParameter=%u}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=1.2}" V="{B TitleVisible}" HorizontalAlignment="Center" FontWeight="Bold" Foreground="{Binding Class=DashboardTitle.fill}" VerticalAlignment="Center" M="10,3,3,3"/><B H="1" S="{Binding Class=AxisY_Line.stroke}" ST="1" M="10,0,10,4" V="{B TitleVisible}"/></DockPanel></B></C></T>');
a.getLine().setWidth(1);a.setY(1);0==this.getTriggerMode()&&this.setTriggerMode(1);this.setMode(a)})})();
