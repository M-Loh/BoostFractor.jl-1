var documenterSearchIndex = {"docs":
[{"location":"resources/#Resources","page":"Resources","title":"Resources","text":"","category":"section"},{"location":"resources/#Useful-Links-and-literature","page":"Resources","title":"Useful Links and literature","text":"","category":"section"},{"location":"resources/","page":"Resources","title":"Resources","text":"1D Model: https://arxiv.org/abs/1612.07057","category":"page"},{"location":"resources/","page":"Resources","title":"Resources","text":"3D Paper describing Recursive Fourier Propagation: https://arxiv.org/abs/1906.02677","category":"page"},{"location":"resources/","page":"Resources","title":"Resources","text":"Transfer Matrices in 3D: http://emlab.utep.edu/ee5390cem.htm","category":"page"},{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"DocTestSetup  = quote\n    using BoostFractor\nend","category":"page"},{"location":"api/#Types","page":"API","title":"Types","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Order = [:type]","category":"page"},{"location":"api/#Functions","page":"API","title":"Functions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Order = [:function]","category":"page"},{"location":"api/#Documentation","page":"API","title":"Documentation","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [BoostFractor]\nOrder = [:type, :function]","category":"page"},{"location":"api/#BoostFractor.Modes","page":"API","title":"BoostFractor.Modes","text":"Modes\n\nDoc: TODO\n\n\n\n\n\n","category":"type"},{"location":"api/#BoostFractor.SetupBoundaries","page":"API","title":"BoostFractor.SetupBoundaries","text":"Summary\n\nmutable struct SetupBoundaries <: Any\n\nDefine properties of dielectric boundaries. Coordinate system?\n\nFields:\n\ndistance::Array{Float64,1} > 0: Distance in z direction to boundary\nr::Array{Complex{Float64},1} [0, 1]: Boundary reflection coefficient for right-propagating wave\neps::Array{Complex{Float64},1}: Dielectric permittivity to the right of each boundary\"\nrelative_tilt_x > 0: Tilt in x direction [rad?]\nrelative_tilt_y > 0: Tilt in y direction [rad?]\nrelative_surfaces::Array{Complex{Float64},3} ?: Surface roughness. z offset (1st dim) at x,y (2nd, 3rd dims)\n\n\n\n\n\n","category":"type"},{"location":"api/#BoostFractor.SeedSetupBoundaries-Tuple{CoordinateSystem}","page":"API","title":"BoostFractor.SeedSetupBoundaries","text":"SeedSetupBoundaries(diskno=3)\n\nInitialize mutable struct SetupBoundaries with sensible values.\n\nArguments\n\ndiskno::Int > 0: Number of dielectric discs\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.add_boundary-Union{Tuple{T}, Tuple{Any,Any,Any,Array{Complex{T},N} where N,Modes}} where T<:Real","page":"API","title":"BoostFractor.add_boundary","text":"Calculate Transfer matrix like in 4.9. \n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.axion_contrib-Tuple{Any,Any,Any,Any,Modes}","page":"API","title":"BoostFractor.axion_contrib","text":"Calculates one summand of the term (M[2,1]+M[1,1]) E0 = sum{s=1...m} (Ts^m[2,1]+Ts^m[1,1]) E0 as in equation 4.14a\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.axion_induced_modes-Tuple{CoordinateSystem,Modes}","page":"API","title":"BoostFractor.axion_induced_modes","text":"Calculate the vector of mode-coefficients that describe the uniform axion-induced field and that is normalized to power 1.\n\nImplements Knirck 6.17.\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.calc_propagation_matrices-Tuple{SetupBoundaries,CoordinateSystem,Modes}","page":"API","title":"BoostFractor.calc_propagation_matrices","text":"Pre-calculates all the propagation matrices. Useful, if they should be altered later (e.g. take out modes, add some additional mixing, etc.)\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.cheerleader-Tuple{Any,Any,SetupBoundaries,CoordinateSystem}","page":"API","title":"BoostFractor.cheerleader","text":"cheerleader(amin, nmax, bdry::SetupBoundaries; f=10.0e9, prop=propagator, emit=nothing, reflect=nothing, Xset=X, Yset=Y, diskR=0.1, returnboth=false)\n\nNew Recursive Fourier Propagation implementation.\n\nArguments:\n\namin: Mimum (local) amplitude of a field, in order to be propagated\nnmax: Maximum number of beam iteration steps, directly equivalent to how many boundaries a beam 'sees' at most\nbdry::SetupBoundaries: Properties of dielectric boundaries\nf::Float64 > 0: Frequency of EM radiation\nprop: Propagator Function to use. Standard is propagator().\nemit:  Explicitly set the axion-induced fields emitted from each boundary (to the left and to the right).               If nothing fields are initialized according to uniform,               homogeneous external B-field with zero axion velocity.\nreflect: If nothing (standar value), the axion-induced signal is computed.            If set, this field defines a beam, for which the reflected beam will be calculated\nXset and Yset: Explicitly set the coordinate system for the fields\ndiskR: Radius of dielectric disk\nreturnboth::Bool: If true cheerleader returns fields leaving on left and right.                     If false only returns fields leaving on right.\n\nSee dancer for old version.\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.dance_intro-Tuple{SetupBoundaries,CoordinateSystem}","page":"API","title":"BoostFractor.dance_intro","text":"dance_intro(bdry::SetupBoundaries, X, Y; bfield=nothing, velocity_x=0, f=10e9,diskR=0.1)\n\nInitialize EM fields. Can include velocity effects.\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.dancer-Tuple{Any,Any,SetupBoundaries,CoordinateSystem}","page":"API","title":"BoostFractor.dancer","text":"Propagates the fields through the system\n\namin:           Mimum (local) amplitude of a field, in order to be propagated\nnmax:           Maximum number of beam iteration steps, directly equivalent to how many boundaries a beam 'sees' at most\nbdry:           SetupBoundaries-Objekt, containing all relevant geometrical information (disk positions, epsilon, etc)\nf:              Frequency\nprop:           Propagator Function to use. Standard is propagator()\nreflect:        If nothing (standar value), the axion-induced signal is computed.                   If set, this field defines a beam, for which the reflected beam will be calculated\nXset, Yset:   Explicitly set the coordinate system for the fields\nreturnsum:      If false, the out-propagating contributions after each iteration will be returned, without summing.\nimmediatesum:   If false, the out-propagating contributions will be saved and summed up at the end.\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.e_field_dimensions-Tuple{Any}","page":"API","title":"BoostFractor.e_field_dimensions","text":"Gives out E-field dimensions in a more readable way. Output should be either 1 or 3.\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.field2modes-Tuple{Any,CoordinateSystem,Modes}","page":"API","title":"BoostFractor.field2modes","text":"Get the mode coefficients for a given field distribution E(x,y)\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.gauss_profile-Tuple{CoordinateSystem}","page":"API","title":"BoostFractor.gauss_profile","text":"gauss_profile(coords::CoordinateSystem; z = 0.000000001, omega0 = 0.1, f = 10e9)\n\nCompute normalized 2D gaussian beam profile at given z position (waist at z = 0).\n\nArguments\n\ncoords: contains X,Y and Kx,Ky coordinates\nz: Distance from beam waist\nomega0 > 0: Beam waist radius\nf > 0: Frequency of monochromatic EM radiation\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.get_kspace_coords-Tuple{Any}","page":"API","title":"BoostFractor.get_kspace_coords","text":"get_kspace_coords(RealSpaceCoords)\n\nCalculate k space coordinate system from real space one. Helper function for SeedCoordinateSystem.\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.index-Tuple{Modes,Int64}","page":"API","title":"BoostFractor.index","text":"index(modes::Modes, k::Int64)\n\nIndexing function to get sub-matrices. (Compare Knirck 6.18.)\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.mode-Tuple{Any,Any,Any,CoordinateSystem}","page":"API","title":"BoostFractor.mode","text":"mode(m,l, coords::CoordinateSystem; diskR=0.15, k0=2pi/0.03)\n\nCalculate the transverse k and field distribution for a mode. Implements Knirck 6.12.\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.modes2field-Tuple{Any,CoordinateSystem,Modes}","page":"API","title":"BoostFractor.modes2field","text":"Get the field distribution E(x,y) for a given vector of mode coefficients\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.propagation_matrix-Tuple{Any,Any,Any,Any,Any,Any,Any,CoordinateSystem,Modes}","page":"API","title":"BoostFractor.propagation_matrix","text":"\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.propagator-Tuple{Any,Any,Any,Any,Any,Any,Any,Any,CoordinateSystem}","page":"API","title":"BoostFractor.propagator","text":"propagator(E0, dz, diskR, eps, tilt_x, tilt_y, surface, lambda)\n\nDo the FFT of E0 on a disk, propagate the beam a given distance and do the iFFT. Note that this method is in-place. If it should be called more than one time on the same fields, use propagator(copy(E0), ...).\n\nAssume: Tilt is small, additional phase is obtained by propagating all fields just with k0 to the tilted surface (only valid if diffraction effects are small).\n\nArguments\n\nE0::Array{Float64,2}: Electric field before propagation\ndz: Distance propagated in z direction\ndiskR: Radius of discs\neps: Dielectric permittivity\ntilt_x: Disc tilt in x direction\ntilt_y: Disc tilt in y direction\nsurface: Surface roughness of disc (only at end of propagation)\nlambda: Wavelength of electric field\n\nSee also: propagatorMomentumSpace\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.propagator1D-Tuple{Any,Any,Any,Any,Any,Any,Any,Any,CoordinateSystem}","page":"API","title":"BoostFractor.propagator1D","text":"propagator1D(E0, dz, diskR, eps, tilt_x, tilt_y, surface, lambda)\n\nThis propagator just does the phase propagation. Go to propagator for documentation. 3D arguments to be compatible with other propagators.\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.propagatorMomentumSpace-Tuple{Any,Any,Any,Any,Any,Any,Any,Any,CoordinateSystem}","page":"API","title":"BoostFractor.propagatorMomentumSpace","text":"propagatorMomentumSpace(E0, dz, diskR, eps, tilt_x, tilt_y, surface, lambda)\n\nPropagator that assumes E0 is already in momentum space. Mix between propagator and propagatorNoTilts. Go to propagator for documentation.\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.propagatorNoTilts-Tuple{Any,Any,Any,Any,Any,Any,Any,Any,CoordinateSystem}","page":"API","title":"BoostFractor.propagatorNoTilts","text":"propagatorNoTilts(E0, dz, diskR, eps, tilt_x, tilt_y, surface, lambda)\n\nWrapped by propagator. Go there for documentation. Tilt arguments to be compatible with other propagators.\n\n\n\n\n\n","category":"method"},{"location":"api/#BoostFractor.transformer-Union{Tuple{T}, Tuple{SetupBoundaries,CoordinateSystem,Modes}} where T<:Real","page":"API","title":"BoostFractor.transformer","text":"Transformer Algorithm using Transfer Matrices and Modes to do the 3D Calculation.\n\n\n\n\n\n","category":"method"},{"location":"1d_model/#D-Model","page":"1D Model","title":"1D Model","text":"","category":"section"},{"location":"1d_model/#Usage","page":"1D Model","title":"Usage","text":"","category":"section"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"The src directory contains a file Analytical1D.py containing a 1D calculation for various disk spacings in Python.","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"The easiest way to use it in julia is to copy it to your project directory and call it via","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"using PyCall\nA1DM = pyimport(\"Analytical1D\")\nfrequencies = 10:0.0001:30\nspacings = [2,3,4,5,6,2,3,4,5,6,7,0]*1e-3 # First value is distance between mirror and first disk\nref, ax = A1DM.disk_system(Array{Float64}(frequencies*1e9),\n        num_disk=11, disk_epsilon=25, mirror=true,\n        spacings=spacings)","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"The last spacing is the distance to the antenna and only changes the phase of the result. The disk thickness is 1mm, but can be changed (see code...).,","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"ref contains an array with the amplitude reflecitivtiy of the system depending on frequency.","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"ax contains an array with the amplitude boost factor of the system depending on frequency.","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"To get the reflected power / power boost, the absolute value of these quantities need to be squared. To get the group delay, you have to take numerically the derivative of the phase of the reflecticity over the angular frequency.","category":"page"},{"location":"1d_model/#Optimization","page":"1D Model","title":"Optimization","text":"","category":"section"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"In order to compare our simulations, I think it is good to use always the same disk spacing configurations. A list of spacings can be found on Confluence, see MADMAX / Working Groups / Theory, simulations and analysis / Disk Positions for various Boost Factors.","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"Work on the optimizations should focus on improving the optimization procedure itself together with the proof of principle setup or learning about the 1D model.","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"Using above code snippet, you can use any Python or Julia optimization package to optimize boost factors.","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"For example you can run","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"# Optimization package for Julia\nusing Optim\n# 1D Model\nA1DM = pyimport(\"Analytical1D\")\n\n\n# Frequencies to look at (e.g. for a plot)\nfrequencies = 21.98:0.002:22.12\n# Frequencies to maximize the boost within\nfreqmin = 22.0\nfreqmax = 22.045\ncond = (frequencies .> freqmin).*(frequencies .< freqmax)\n\n# A good initial guess of course may speed up the optimization drastically.\ninit = [1.00334, 6.94754, 7.1766, 7.22788, 7.19717,\n        7.23776, 7.07746, 7.57173, 7.08019, 7.24657,\n        7.21708, 7.18317, 7.13025, 7.2198, 7.45585,\n        7.39873, 7.15403, 7.14252, 6.83105, 7.42282]*1e-3 \n\n# The function to optimize\nfunction minimizeme(arr)\n    # You do not want to optimize the last spacing to the antenna,\n    # because it does not change the boost factor\n    # So arr only contains e.g. 20 spacings\n    # but the 1D code needs 21, so we add one:\n    \n    distances = copy(arr)\n    push!(distances,0)\n    \n    # We run the 1D code for the frequencies where we want to maximize the boost \n    ref, ax = A1DM.disk_system(Array{Float64}(frequencies*1e9)[cond], \n                               num_disk=20, disk_epsilon=24, spacings=distances)\n    \n    # Take the minimum value of the boost in that region and\n    # return it after multiplying with (-1).\n    # This value shall be minimized.\n    return -minimum(abs2.(ax))\nend\n\n# Do the optimization\noptim_result = Optim.optimize(minimizeme, init, NelderMead(), \n                              Optim.Options(x_tol=100e-9, f_tol=1e-2,g_tol=1e-5,show_trace=true,\n                              show_every=100,iterations=Int(5e4) ) )\n# Get the resulting spacings\noptimized_spacings = Optim.minimizer(optim_result)\n\n# ... ","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"Of course, you can do this more sophiscticated, e.g. if you get negative spacings or multiple wavelength spacings, you may want to constrain the optimization range. You can also set a time limit for the optimization etc.","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"lower = zeros(20) # negative spacings would be a bit, well, impractical..\nupper = 0.036*ones(20) # more than 2 wavelengths really isn't neccessary...\noptim_result = Optim.optimize(minimizeme, lower, upper, init,  \n                              Fminbox(NelderMead()), \n                              Optim.Options(x_tol=100e-9, f_tol=1e-3,g_tol=1e-5,\n                                            show_trace=true,show_every=100,time_limit=43200. ) )","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"For more details see the Optim documentation.","category":"page"},{"location":"1d_model/#ToDo","page":"1D Model","title":"ToDo","text":"","category":"section"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"It remains to clean up the 1D model file, translate it to julia such that maybe a automatic differentiation could be applied. This could be very, very useful to do optimizations of the disks spacings.","category":"page"},{"location":"1d_model/#Trouble-Shooting","page":"1D Model","title":"Trouble-Shooting","text":"","category":"section"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"Note, that for this to work, it may heavily depend on your Julia and Python version(s) installed.","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"It might be neccessary to add at the beginning of your Julia file: ","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"file:pushfirst!(PyVector(pyimport(\"sys\").\"path\"), \"\") ","category":"page"},{"location":"1d_model/","page":"1D Model","title":"1D Model","text":"in order to import the python file from the local directory. ","category":"page"},{"location":"code/dancer_implementation/#Implementation-notes-on-dancer()-function","page":"Implementation notes on dancer() function","title":"Implementation notes on dancer() function","text":"","category":"section"},{"location":"code/dancer_implementation/","page":"Implementation notes on dancer() function","title":"Implementation notes on dancer() function","text":"The following outlines the indexing of the arrays.","category":"page"},{"location":"code/dancer_implementation/","page":"Implementation notes on dancer() function","title":"Implementation notes on dancer() function","text":"Boundaries:         [ 1,       2,      3,      4,     ...                ]\n               MIRROR |       |       |       |      \n               MIRROR |       |       |       |        ...\n               MIRROR |       |       |       |      \nRegions:              [  1    ,   2   ,   3   ,   4   ,  ...                ]\n","category":"page"},{"location":"code/dancer_implementation/","page":"Implementation notes on dancer() function","title":"Implementation notes on dancer() function","text":"Arrays with indices refering to boundaries are:","category":"page"},{"location":"code/dancer_implementation/","page":"Implementation notes on dancer() function","title":"Implementation notes on dancer() function","text":"# in general:\nSetupBoundaries.r","category":"page"},{"location":"code/dancer_implementation/","page":"Implementation notes on dancer() function","title":"Implementation notes on dancer() function","text":"Arrays with indices refering to regions are:","category":"page"},{"location":"code/dancer_implementation/","page":"Implementation notes on dancer() function","title":"Implementation notes on dancer() function","text":"# in general:\nSetupBoundaries.distance\n               .eps\n               .relative_tilt_x\n               .relative_tilt_y\n               .relative_surfaces\n\n# in dancer() function:\nfields","category":"page"},{"location":"code/dancer_implementation/","page":"Implementation notes on dancer() function","title":"Implementation notes on dancer() function","text":"Before the call of the propagator the rightmoving fields are those leaving a boundary to the right, yet upropagated. The leftmoving fields are those leaving a boundary to the left, yet upropagated. Therefore in every gap in each step the rightmoving fields go from left to right (left leg) and vice versa.","category":"page"},{"location":"code/dancer_implementation/","page":"Implementation notes on dancer() function","title":"Implementation notes on dancer() function","text":"In each outer iteration (while loop, \"measure of music\") we do all propagations and reflection / transmissions for the whole system once.","category":"page"},{"location":"code/dancer_implementation/","page":"Implementation notes on dancer() function","title":"Implementation notes on dancer() function","text":"In each sub-iteration (for loop, \"legs\") we iterate over boundaries. At each boundary we \"pull\" the fields to the boundary using the propagator. Afterwards we calculate the reflection and transmission.","category":"page"},{"location":"code/dancer_implementation/","page":"Implementation notes on dancer() function","title":"Implementation notes on dancer() function","text":"To save memory the index of rightmoving and leftmoving is swapped after each iteration, such that the reflected fields stay in the same place in memory and only one copy for one transmitted field has to be made. This is done at the end of each iteration of the outer loop.","category":"page"},{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"This file summerizes what is contained in the examples.","category":"page"},{"location":"examples/#Beam-Shapes","page":"Examples","title":"Beam Shapes","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"File: Beam Shapes.ipynb","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Beam Shape Plot Code Snippet\nGaussian Beam Code Snippet\nBeam Shape Plots of some of the fundamental modes\nExample of Coupling Integral calculation","category":"page"},{"location":"examples/#Single-Disk","page":"Examples","title":"Single Disk","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"File: Single Disk.ipynb","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Initialization & Run of all algorithms for a single disk setup\nComparision between the algorithms","category":"page"},{"location":"examples/#Transformer,-20-Disks","page":"Examples","title":"Transformer, 20 Disks","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"File: Transformer, 20 Disks.ipynb","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Initialization and Usage of transformer()\n20 Disk Benchmark Boost Factor for Prototype\nStacked-Modes Plot","category":"page"},{"location":"LICENSE/#LICENSE","page":"LICENSE","title":"LICENSE","text":"","category":"section"},{"location":"LICENSE/","page":"LICENSE","title":"LICENSE","text":"using Markdown\nMarkdown.parse_file(joinpath(@__DIR__, \"..\", \"..\", \"LICENSE.md\"))","category":"page"},{"location":"#BoostFractor.jl","page":"Home","title":"BoostFractor.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"<img src=\"img/boostfractorlogo.png\" alt=\"BoostFractor\" width=300>","category":"page"},{"location":"","page":"Home","title":"Home","text":"MADMAX electrodynamics simulation in Julia.","category":"page"},{"location":"#D-Calculations","page":"Home","title":"1D Calculations","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A 1D Code based on impedance transformation / 1D ray tracing is available. It is equivalent to the transfer matrices in arXiv:1612.07057.","category":"page"},{"location":"","page":"Home","title":"Home","text":"All 3D Codes below generalize also to 1D, but may be less performant.","category":"page"},{"location":"#D-Calculations-2","page":"Home","title":"3D Calculations","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Below a summary of implemented codes. More details on how the algorithms work can be found in literature.","category":"page"},{"location":"#Recursive-(Fourier)-Propagation","page":"Home","title":"Recursive (Fourier) Propagation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Iteratively propagate electromagnetic fields between dielectric interfaces.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Cheerleader and Dancer","category":"page"},{"location":"#Mode-Matching","page":"Home","title":"Mode Matching","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Solve boundary conditions on disk interfaces by matching (eigen)modes between the different regions. Since only a few modes need to be considered for a large boost factor, transfer matrices can be used.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Transformer: Generalized Transfer-Matrix implementation.","category":"page"},{"location":"#Example-Code","page":"Home","title":"Example Code","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The examples folder contains Jupyter notebooks with examples on how to use BoostFractor. A summary of the contained examples can be found here","category":"page"},{"location":"#Disk-Position-Optimization","page":"Home","title":"Disk Position Optimization","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The 1D Code description also contains some examples how to use julia to do optimizations (of the disk spacings).","category":"page"},{"location":"3d_algorithms/#D-Algorithms","page":"3D Algorithms","title":"3D Algorithms","text":"","category":"section"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"This file describes how to use the different implemented 3D algorithms.","category":"page"},{"location":"3d_algorithms/#Cheerleader-and-Dancer","page":"3D Algorithms","title":"Cheerleader and Dancer","text":"","category":"section"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"Iteratively propagate fields between boundaries for nmax iterations or until output amplitude is smaller than amin.","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"Arguments:","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"amin:           Mimum (local) amplitude of a field, in order to be propagated\nnmax:           Maximum number of beam iteration steps, directly equivalent to how many boundaries a beam 'sees' at most\nbdry:           SetupBoundaries object, containing all relevant geometrical information (disk positions, epsilon, etc).\ncoords:         CoordinateSystem object containing X, Y coordinates in real and K space\nf:              Frequency in Hz\nprop:           Propagator function to use. Standard is propagator()\nreflect:        If nothing (standar value), the axion-induced signal is computed.                   If set, this field defines a beam, for which the reflected beam will be calculated\nemit:           If nothing (standar value), the axion-induced signal is computed.                   If set, this array contains all emitted fields\nreturnsum:      (only dancer) If false, the out-propagating contributions after each iteration will be returned, without summing.\nimmediatesum:   (only dancer) If false, the out-propagating contributions will be saved and summed up at the end.\nreturnboth:     (only cheerleader) If true, the out-propagating waves on the right and on the left are returned. Otherwise only the out-propagating wave on the right. Can be used to calculate transmission.","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"Returns:","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"A complex array emitted_fields of dimension (length(X), length(Y)) containing the emitted beam shape. Normalization: For the boost factor, the fields are normalized to the axion-induced field E0, i.e. the total power contained in the beam is","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"  sum(abs2.(emitted_fields * E0)*dx*dx)","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"A perfect mirror would emit","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"  abs2.(E0)*pi*diskR^2","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"Therefore, the boost factor is","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"  sum(abs2.(emitted_fields * E0)*dx*dx) / (pi*diskR^2)","category":"page"},{"location":"3d_algorithms/#Initialization","page":"3D Algorithms","title":"Initialization","text":"","category":"section"},{"location":"3d_algorithms/#cheerleader()","page":"3D Algorithms","title":"cheerleader()","text":"","category":"section"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"cheerleader can calculate the fields that leave the system on both sides, and can also calculate transmission.","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"Example for cheerleader():","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"# Coordinate System\n### Test CHEERLEADER ###\n@everywhere begin\n    # Initialize Coordinate System\n    dx = 0.01\n    coords = SeedCoordinateSystem(X = -0.5:dx:0.5, Y = -0.5:dx:0.5)\n    \n    diskR = 0.15\n    \n    # SetupBoundaries\n    # No Tilt or surface roughness here.\n    epsilon = 9\n    eps = Array{Complex{Float64}}([NaN,1,epsilon,1])\n    R = -(1 - sqrt(epsilon)) / (1 + sqrt(epsilon))\n    r = Array{Complex{Float64}}([1.0, -R, R]);\n    distance = [0.0, 0.15, 0.15/sqrt.(epsilon), 0.0]*1e-2\n    \n    sbdry = SeedSetupBoundaries(coords, diskno=1, distance=distance, epsilon=eps)\n    \nend","category":"page"},{"location":"3d_algorithms/#dancer()","page":"3D Algorithms","title":"dancer()","text":"","category":"section"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"This algorithm is the one from the previous version. cheerleader needs only half as much iterations.","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"dancer only calculates fields that leave the system to the right, and can only calculate reflectivities. Therefore, the mirror is not a region and not initialized as such. dancer now calculates reflectivities from permittivities.","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"Example for dancer():","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"# Coordinate System\n@everywhere begin\n    # Initialize Coordinate System\n    dx = 0.01\n    coords = SeedCoordinateSystem(X = -0.5:dx:0.5, Y = -0.5:dx:0.5)\n    \n    diskR = 0.15\n    \n    # SetupBoundaries\n    # No Tilt or surface roughness here.\n    epsilon = 9\n    eps = Array{Complex{Float64}}([NaN,1,epsilon,1])\n    R = -(1 - sqrt(epsilon)) / (1 + sqrt(epsilon))\n    r = Array{Complex{Float64}}([1.0, -R, R]);\n    distance = [0.0, 0.15, 0.15/sqrt.(epsilon), 0.0]*1e-2\n    \n    sbdry = SeedSetupBoundaries(coords, diskno=1, distance=distance, epsilon=eps)\n    \nend","category":"page"},{"location":"3d_algorithms/#Convergence-Remarks","page":"3D Algorithms","title":"Convergence Remarks","text":"","category":"section"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"Until now I always used amin = 0, but a different one might be also useful, but increase the runtime a bit although I did not study this due to time. For one disk + mirror I recommend nmax = 100 (foŕ dancer() double those numbers, but don't use dancer anymore...). Empirically for more disks: for 5 Sapphire disks nmax=900 seems still good enough. For higher number it should roughly scale quadratically with the number of disks, so nmax=12800 is good for 20 disks.","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"The X and Y grid should be set in such a way that the resolution is at least half a wavelength, i.e. for this example it should be sufficient to just use X=-0500105Y=-0500105, since the wavelength at 10GHz is roughly 3cm.","category":"page"},{"location":"3d_algorithms/#Transformer","page":"3D Algorithms","title":"Transformer","text":"","category":"section"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"Apply transfer matrices to match modes between different regions. The transfer matrices for reflection/transmission are directly calculated using the permittivities. Therefore, there is no need to set the reflection coefficients anymore. Note: epsilon = NaN in initialization to match behavior of cheerleader. However epsilon is still set in the code, so if you want to consider something other than a mirror, you can.","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"Arguments:","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"bdry:           SetupBoundaries object, containing all relevant geometrical information (disk positions, epsilon, etc).\ncoords:         CoordinateSystem object containing X, Y coordinates in real and K space\nmodes:       Modes object containing important information for modes\nf:              Frequency in Hz\nprop:           Propagator function to use. Standard is propagator()\nreflect:        If nothing (standar value), the axion-induced signal is computed.                   If set, this field defines a beam, for which the reflected beam will be calculated.                   A vector with the mode coefficients of the modes. To compute it from an arbitrary field distribution use field2modes().\nemit:           If nothing (standar value), the axion-induced signal is computed.                   If set, this array contains all emitted fields.                   A vector with the mode coefficients of the modes. To compute it from an arbitrary field distribution use field2modes().","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"Returns:","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"Vector with the mode coefficients of the boosted fields. To compute the field distribution from this use field2modes(). Normalization: For the boost factor the vector is normalized such that its absolute abs2.(vec) == 1 for a mirror, i.e. its absolute directly gives the boost factor. Note that this is different from cheerleader which returns fields normalized to the axion-induced field E0 (see above).","category":"page"},{"location":"3d_algorithms/#Initialization-2","page":"3D Algorithms","title":"Initialization","text":"","category":"section"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"@everywhere begin\n    # Initialize Coordinate System\n    dx = 0.01\n    coords = SeedCoordinateSystem(X = -0.5:dx:0.5, Y = -0.5:dx:0.5)\n    \n    diskR = 0.15\n    \n    # SetupBoundaries\n    # No Tilt or surface roughness here.\n    epsilon = 9\n    eps = Array{Complex{Float64}}([NaN,1,epsilon,1])\n    R = -(1 - sqrt(epsilon)) / (1 + sqrt(epsilon))\n    r = Array{Complex{Float64}}([1.0, -R, R]);\n    distance = [0.0, 0.15, 0.15/sqrt.(epsilon), 0.0]*1e-2\n    \n    sbdry = SeedSetupBoundaries(coords, diskno=1, distance=distance, epsilon=eps)\n    \n    # Initialize modes\n    Mmax = 10\n    Lmax = 0 # l-Modes are irrelevant for the azimuthally symmetric haloscope\n    # For a 1D calculation:\n    #modes = SeedModes(coords, ThreeDim=false, Mmax=Mmax, Lmax=Lmax, diskR=diskR)\n    # For 3D:\n    modes = SeedModes(coords, ThreeDim=true, Mmax=Mmax, Lmax=Lmax, diskR=diskR)\n    \nend","category":"page"},{"location":"3d_algorithms/#Convergence-Remarks-2","page":"3D Algorithms","title":"Convergence Remarks","text":"","category":"section"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"The transfer matrix system is solved numerically using simply Julia's backslash \\ operator. For the low number of modes considered here (<~ 100) this should be fairly accurate and give smaller numerical errors than the systematic error coming from neglecting higher modes.","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"There might be a numerical error in calculating the mixing matrices between the modes. It could be estimated by for example varying the grid size of the (X,Y) grid.","category":"page"},{"location":"3d_algorithms/","page":"3D Algorithms","title":"3D Algorithms","text":"To estimate the error from neglecting higher modes, simply include more modes. For the emitted power of the disks one can say that for higher m the coupling of the axion-induced field and the mode gets smaller. Therefore, for the result to be valid is a neccessary condition, that including higher modes does not contribute significant power. This should be checked at least for one more higher mode for each calculation.","category":"page"}]
}
