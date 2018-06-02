function table(){ 
	var n=prompt("masukkan banyak data:");  //--> banyak data
	var datax=new Array();
	var datay=new Array();
	var dataxy=new Array();
	var datax2=new Array();
	var datay2=new Array();
//================= masukkan nilai data x ======================//
//==============================================================//
	i=0;                                    // --> set index data awal
	while(i<=n-1){                          // --> masukkan data x
		datax[i]=prompt("masukkan data:"+(i+1));
		i++;
	};
	jumlahx=0                              // -->jumlah dat x
	for (var i = 0; i < datax.length; i++) {
		jumlahx=eval(jumlahx)+eval(datax[i]);
	};
//================= masukkan nilai data y ======================//
//==============================================================//
	j=0;                                    // --> set index data awal
	while(j<=n-1){                          // --> masukkan data y
		datay[j]=datax[j]**2+1;             // --> rumus y=x**2+1
		j++
	};

	jumlahy=0                              // -->jumlah dat y
	for (var i = 0; i < datay.length; i++) {
		jumlahy=eval(jumlahy)+eval(datay[i]);
	};
//================= masukkan nilai data xy =====================//
//==============================================================//
	k=0;                                    // --> set index data awal
	while(k<=n-1){                          // --> masukkan data xy
		dataxy[k]=datax[k]*datay[k]         // --> rumus xy=x*y
		k++
	};

	jumlahxy=0                              // -->jumlah dat xy
	for (var i = 0; i < dataxy.length; i++) {
		jumlahxy=eval(jumlahxy)+eval(dataxy[i]);
	};
//================= masukkan nilai data x^2 =====================//
//===============================================================//
	l=0;                                    // --> set index data awal
	while(l<=n-1){                          // --> masukkan data x^2
		datax2[l]=datax[l]**2        		// --> rumus x^2=x**2
		l++
	};

	jumlahx2=0                              // -->jumlah dat x
	for (var i = 0; i < datax2.length; i++) {
		jumlahx2=eval(jumlahx2)+eval(datax2[i]);
	};
//================= masukkan nilai data x^2 =====================//
//===============================================================//
	m=0;                                    // --> set index data awal
	while(m<=n-1){                          // --> masukkan data y^2
		datay2[m]=datay[m]**2        		// --> rumus y^2=y**2
		m++
	};

	jumlahy2=0                              // -->jumlah dat x
	for (var i = 0; i < datay2.length; i++) {
		jumlahy2=eval(jumlahy2)+eval(datay2[i]);
	};
//=================membuat tabel============================
	var table='';
	var baris=n;
	var kolom=5;
	for (var r= 0; r < baris ;r++)
	{
		table+="<tr><td style='background-color: Darksalmon;'>"+(r+1)+"</td><td style='background-color: Chartreuse;'>"+datax[r]+"</td><td style='background-color: Cyan;'>"+datay[r]+"</td><td style='background-color: Gold;'>"+dataxy[r]+"</td><td style='background-color:  Fuchsia;'>"+datax2[r]+"</td><td style='background-color: Bisque;'>"+datay2[r]+"</td></tr>"
	};
	
	document.write('<table border="1"><tr><td style="background-color: Darksalmon;">No</td><td style="background-color: Chartreuse;">X</td><td style="background-color: Cyan;">Y</td><td style="background-color: gold;">XY</td><td style="background-color: Fuchsia;">X^2</td><td style="background-color: Bisque;">Y^2</td></tr>'+table+'<tr><td style="background-color: Darksalmon;">jumlah</td><td style="background-color: Chartreuse;">'+jumlahx+'</td><td style="background-color: Cyan;">'+jumlahy+'</td><td style="background-color: gold;">'+jumlahxy+'</td><td style="background-color: Fuchsia;">'+jumlahx2+'</td><td style="background-color: Bisque;">'+jumlahy2+'</td></tr></table>');
}