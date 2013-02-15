/*--------------------------------------------------------------------------+
 This file is part of ARSnova.
 app/stores/Food.js
 - Beschreibung: Store für Mensa-Gerichte 
 - Version:      1.0, 01/05/12
 - Autor(en):    Christian Thomas Weber <christian.t.weber@gmail.com>
 +---------------------------------------------------------------------------+
 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or any later version.
 +---------------------------------------------------------------------------+
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 +--------------------------------------------------------------------------*/
Ext.regStore('Food', {
	fields: ['name', 'value', 'percent'],
	
	data: [
	    {name: "Sahnehacksteak", value: 0, percent: 0.0},
		{name: "Kartoffelfrittata", value: 0, percent: 0.0},
		{name: "Speckbohnen", value: 0, percent: 0.0},
		{name: "Pasta", value: 0, percent: 0.0},
		{name: "Salat", value: 0, percent: 0.0}
	]
});
